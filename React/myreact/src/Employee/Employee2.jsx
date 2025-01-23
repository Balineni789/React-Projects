
// import React, { useState } from 'react'

// const Employee2 = ()=>{

//   const[name, setName]   = useState("")
//   const[role, setRole]   = useState("")
//   const[email, setEmail] = useState("")
//   const[dept, setDept]   = useState("")

// //   const Details= {name,role,email,dept}

//  const Submit =(e)=>{
//     e.preventDefault()
//    setName(name)
//    setEmail(role)
//    setRole(email)
//    setDept(dept)
//  }

//     return(
//         <div className='P'>
//             <div className='C'>
//                 <h2>{Employee1}</h2>
//                 <form onSubmit={Submit}>
//                     <label>Employee Name</label>
//                     <input type ="text"  name="name"  onChange={(n) => setName(n.target.value)}/><br/>
//                     <label>Employee Role</label>
//                     <input type ="text"  name="role"  onChange={(r) => setRole(r.target.value)} /><br/>
//                     <label>Employee Email</label>
//                     <input type ="email" name="email" onChange={(e) => setEmail(e.target.value)}/><br/>
//                     <label>Employee Dept</label>
//                     <input type ="text"  name="dept"  onChange={(d) => setDept(d.target.value)}/><br/>
//                     <button type='submit'>Submit</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Employee2
