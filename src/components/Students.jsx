import React from 'react';

function Students(){
    return(
        <>
        <div className='flex'>
            <h1>Student Details</h1>
            <button>Add new student</button>
        </div>
        
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Aditya</td>
      <td>25</td>
      <td>MERN</td>
      <td>October</td>
      <td>Edit</td>
    </tr>
    <tr>
      <td>Raj</td>
      <td>25</td>
      <td>MERN</td>
      <td>November</td>
      <td>Edit</td>
    </tr>
    <tr>
      <td>Akash</td>
      <td>26</td>
      <td>MERN</td>
      <td>September</td>
      <td>Edit</td>
    </tr>
    <tr>
        <td>Jeeves</td>
        <td>25</td>
        <td>MERN</td>
        <td>September</td>
        <td>Edit</td>
    </tr>
    <tr>
        <td>Ajay</td>
        <td>24</td>
        <td>MERN</td>
        <td>October</td>
        <td>Edit</td>
    </tr>
    <tr>
        <td>Sandeep</td>
        <td>24</td>
        <td>MERN</td>
        <td>November</td>
        <td>Edit</td>
    </tr>
    <tr>
        <td>Sashi</td>
        <td>24</td>
        <td>MERN</td>
        <td>October</td>
        <td>Edit</td>
    </tr>
    
  </tbody>
</table>
        </>
    );
}
export default Students;