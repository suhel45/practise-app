import { useActionState } from "react"


interface messageData {
    message?: string,
    error?:string,
}
const handleSubmit  = async(state: string | undefined | object , formData: FormData):Promise<string | undefined | object>=>{
    console.log(state)
    const name = formData.get("name");
    const email = formData.get("email");
    await new Promise(res=>setTimeout(res,2000));
    console.log("submit" ,name, email)
    if(name && email){
        return {message:"Form submitted successfully"};
    }
    else{
        return {error:"Form submission failed"};
    }
    }
const FormSubmission = () => {
    const [data,action, ispending] = useActionState(handleSubmit, undefined);
    console.log("data",data)
  return (
    <>
    <div>FormSubmission</div>
    <form action={action}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="text" id="name" name="email"  />
        <br />
        <button type="submit" disabled={ispending}>
           {ispending?"submitting...":"submit"}
            </button>
    </form>
    {<span style={{color:"green"}}>{(data as messageData)?.message}</span>}
    <span style={{color:"red"}}>{(data as messageData)?.error}</span>
    </>
  )
}

export default FormSubmission