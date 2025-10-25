import { useState } from 'react';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted (no backend connected)');
    console.log(formData);
  };

  return (
    <div className="container mt-4">
      <h2>Employee Form</h2>
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input name="name" className="form-control" onChange={handleChange} value={formData.name} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Designation</label>
          <input name="designation" className="form-control" onChange={handleChange} value={formData.designation} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input name="location" className="form-control" onChange={handleChange} value={formData.location} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input type="number" name="salary" className="form-control" onChange={handleChange} value={formData.salary} required />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
