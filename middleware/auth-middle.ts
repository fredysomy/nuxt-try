import axios from 'axios'

export default defineNuxtRouteMiddleware(async (to, from,nuxtApp) => {
  const { $axios } = useNuxtApp() as unknown as { $axios: typeof axios }
   const isAuthenticated = async () => {
     try {
       const cookies = useCookie('login').value
       
       // Correctly format the cookie header
       const response = await $axios.get('/api/auth/checkSessionExist', {
         headers: {
           'Cookie': `login=${cookies}` // Format cookie properly
         },
         withCredentials: true,
       });
       
       
       return response.status === 200;
     } catch (error) {
       if ((error as any).response) {
         if (axios.isAxiosError(error) && error.response) {
           console.log(error.response.status);
         }
         return false;
       } else if ((error as any).request) {
         console.log('No response received');
         return false;
       } else {
         console.log('Error', (error as any).message);
         return false;
       }
     }
   }

   const authenticated = await isAuthenticated();
  
   if (to.path.startsWith('/secret') && !authenticated) {
     return navigateTo('/login')
   }

  
})