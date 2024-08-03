import  { useState } from 'react';
import toast from 'react-hot-toast'

const UserSignup = () => {
    const [loading, setLoading] = useState(false);

    
  const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
    const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
    if (!success) return;

    try {
      const res = await fetch("/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
      });

      const data = await res.json();
      if (res.status === 201) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
     return{loading ,signup}
  
};


export default UserSignup

function handleInputErrors ({fullName,username,password,confirmPassword,gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error('please fill in all fields')
        return false
    }
    if(password !== confirmPassword){
        toast.error('passwords do not match')
        return false
    }
    if(password.length < 6){
        toast.error('password must be at least 6 characters')
        return false
    }
}
