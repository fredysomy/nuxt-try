import axios from 'axios'

export default defineNuxtRouteMiddleware(async (to, from, context) => {
   const isAuthenticated = async () => {
     try {
       const cookies = useCookie('login').value
       
       // Correctly format the cookie header
       const response = await axios.get('http://localhost:3001/api/auth/checkSessionExist', {
         headers: {
           'Cookie': `login=${cookies}` // Format cookie properly
         },
         withCredentials: true,
       });
       
       console.log(response);
       return response.status === 200;
     } catch (error) {
       if (error.response) {
         console.log(error.response.status);
         return false;
       } else if (error.request) {
         console.log('No response received');
         return false;
       } else {
         console.log('Error', error.message);
         return false;
       }
     }
   }

   const authenticated = await isAuthenticated();
   console.log('Authentication status:', authenticated);

   if (to.path === '/secret' && !authenticated) {
     return navigateTo('/login')
   }
})