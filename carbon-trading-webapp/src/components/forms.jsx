import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const RequestForm = () => {
    const [formData, setFormData] = useState({
        requestDate: '',
        companyName: '',
        carbonPrice: '',
        carbonQuantity: '',
        requestingReason: '',
        requestType: 'Buy'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}> 
            <div >
                <label>Request Date:</label>
                <input
                    type="date"
                    name="requestDate"
                    value={formData.requestDate}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Company Name:</label>
                <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Carbon Price (SGD/Tonnes):</label>
                <input
                    type="number"
                    name="carbonPrice"
                    value={formData.carbonPrice}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Carbon Quantity:</label>
                <input
                    type="number"
                    name="carbonQuantity"
                    value={formData.carbonQuantity}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Requesting Reason:</label>
                <textarea
                    name="requestingReason"
                    value={formData.requestingReason}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Request Type:</label>
                <select
                    name="requestType"
                    value={formData.requestType}
                    onChange={handleChange}
                    required
                >
                    <option value="Buy">Buy</option>
                    <option value="Sell">Sell</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default RequestForm;