// components/CreateInvoice.jsx
import React, { useState } from "react";
import { Plus } from "lucide-react";

export default function CreateInvoice({ onAddInvoice }) {
  const [showForm, setShowForm] = useState(false);
  const [client, setClient] = useState("");
  const [amount, setAmount] = useState("");
  const [due, setDue] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!client || !amount || !due) return;
    onAddInvoice({
      id: Date.now(),
      client,
      number: "INV-" + Math.floor(Math.random() * 1000),
      amount,
      due,
      status: "Draft"
    });
    setClient(""); setAmount(""); setDue(""); setShowForm(false);
  };

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow">
      <div 
        className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center mb-2 cursor-pointer"
        onClick={() => setShowForm(true)}
      >
        <Plus className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-purple-600 text-lg font-semibold">Create New Invoice</h2>
      <p className="text-sm text-gray-500 mt-1">
        or upload an existing invoice and set payment reminder
      </p>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <form 
            className="bg-white p-6 rounded shadow w-80"
            onSubmit={handleSubmit}
          >
            <h3 className="text-lg font-bold mb-4">New Invoice</h3>
            <input
              placeholder="Client Name"
              value={client}
              onChange={e => setClient(e.target.value)}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              placeholder="Amount"
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              placeholder="Due Date"
              type="date"
              value={due}
              onChange={e => setDue(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            <div className="flex justify-end gap-2">
              <button 
                type="button" 
                onClick={() => setShowForm(false)}
                className="px-4 py-2 rounded bg-gray-300"
              >Cancel</button>
              <button type="submit" className="px-4 py-2 rounded bg-purple-500 text-white">Add</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}