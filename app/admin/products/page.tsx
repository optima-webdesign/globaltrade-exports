'use client'

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiSearch, FiEdit2, FiTrash2, FiFilter, FiMoreVertical, FiX, FiCheck } from 'react-icons/fi';

// INITIAL DUMMY DATA FOR PRODUCTS
const initialProducts = [
  { 
    id: 'PRD-001', 
    name: 'Premium Turmeric Powder', 
    category: 'Spices', 
    moq: '5 Metric Tons', 
    status: 'Active',
    image: '/product/turmeric.png'
  },
  { 
    id: 'PRD-002', 
    name: 'Non-Basmati White Rice (IR64)', 
    category: 'Food Grains', 
    moq: '20 Metric Tons', 
    status: 'Active',
    image: '/product/rice.png'
  },
  { 
    id: 'PRD-003', 
    name: 'Organic Ashwagandha Root', 
    category: 'Herbal Products', 
    moq: '500 KG', 
    status: 'Draft',
    image: '/product/ashwagandha.png'
  },
];

export default function AdminProductsPage() {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    category: 'Spices',
    moq: '',
    status: 'Active'
  });

  // Filter Logic
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle Add Product Submit
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newProduct = {
      id: `PRD-00${products.length + 1}`, // Simple dynamic ID
      name: formData.name,
      category: formData.category,
      moq: formData.moq,
      status: formData.status,
      // Using a placeholder image for newly added products
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=200&auto=format&fit=crop'
    };

    // Add new product to the top of the list
    setProducts([newProduct, ...products]);
    
    // Reset form and close modal
    setFormData({ name: '', category: 'Spices', moq: '', status: 'Active' });
    setIsModalOpen(false);
  };

  // Handle Delete Product
  const handleDelete = (idToRemove: string) => {
    setProducts(products.filter(product => product.id !== idToRemove));
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12 relative">
      
      {/* PAGE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#16232A] tracking-tight">Products</h1>
          <p className="text-[#16232A]/60 font-medium mt-1">Manage your export catalog, pricing, and details.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#FF5B04] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#16232A] transition-colors shadow-lg flex items-center gap-2 w-fit"
        >
          <FiPlus className="text-lg" /> Add Product
        </button>
      </div>

      {/* DATA TABLE CARD */}
      <div className="bg-white rounded-3xl shadow-sm border border-[#16232A]/5 overflow-hidden">
        
        {/* TOOLBAR */}
        <div className="p-6 border-b border-[#16232A]/5 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#16232A]/40">
              <FiSearch />
            </div>
            <input 
              type="text" 
              placeholder="Search products by name or category..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#F5F7FA] border border-[#16232A]/5 text-sm font-bold pl-11 pr-4 py-3 rounded-xl outline-none focus:border-[#FF5B04] transition-colors"
            />
          </div>
          
          <button className="flex items-center justify-center gap-2 bg-[#F5F7FA] text-[#16232A] px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#E4EEFO] transition-colors border border-[#16232A]/5">
            <FiFilter /> Filters
          </button>
        </div>
        
        {/* TABLE */}
        <div className="overflow-x-auto">
          {/* FIX: min-w-[800px] ko min-w-200 kar diya */}
          <table className="w-full text-left border-collapse min-w-200">
            <thead>
              <tr className="bg-[#F5F7FA] text-[#16232A]/50 text-[10px] uppercase tracking-widest">
                <th className="p-5 font-bold w-16">ID</th>
                <th className="p-5 font-bold">Product Details</th>
                <th className="p-5 font-bold">Category</th>
                <th className="p-5 font-bold">Min. Order (MOQ)</th>
                <th className="p-5 font-bold">Status</th>
                <th className="p-5 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium text-[#16232A]">
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.tr 
                    key={product.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="border-b border-[#16232A]/5 hover:bg-[#F5F7FA]/50 transition-colors group"
                  >
                    <td className="p-5 text-xs font-bold text-[#16232A]/40">{product.id}</td>
                    <td className="p-5">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-[#E4EEFO] shrink-0 border border-[#16232A]/10">
                          <Image src={product.image} alt={product.name} fill className="object-cover" />
                        </div>
                        <p className="font-bold text-[#16232A]">{product.name}</p>
                      </div>
                    </td>
                    <td className="p-5 text-[#16232A]/70">{product.category}</td>
                    <td className="p-5 font-bold text-[#075056]">{product.moq}</td>
                    <td className="p-5">
                      <span className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest ${
                        product.status === 'Active' 
                          ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                          : 'bg-slate-100 text-slate-500 border border-slate-200'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="p-5 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                        <button className="w-8 h-8 rounded-lg bg-white border border-[#16232A]/10 flex items-center justify-center text-[#16232A]/70 hover:text-[#075056] hover:border-[#075056] transition-colors" title="Edit">
                          <FiEdit2 className="text-sm" />
                        </button>
                        <button 
                          onClick={() => handleDelete(product.id)}
                          className="w-8 h-8 rounded-lg bg-white border border-[#16232A]/10 flex items-center justify-center text-[#16232A]/70 hover:text-red-500 hover:border-red-500 transition-colors" title="Delete"
                        >
                          <FiTrash2 className="text-sm" />
                        </button>
                        <button aria-label="More options" className="w-8 h-8 rounded-lg flex items-center justify-center text-[#16232A]/50 hover:text-[#16232A] transition-colors">
                          <FiMoreVertical className="text-lg" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
              
              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-10 text-center text-[#16232A]/50 font-medium">
                    No products found matching &quot;{searchTerm}&quot;
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- ADD PRODUCT MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#16232A]/60 backdrop-blur-sm z-50"
              onClick={() => setIsModalOpen(false)}
            />
            
            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between p-6 border-b border-[#16232A]/5">
                <h2 className="text-xl font-black text-[#16232A]">Add New Product</h2>
                {/* FIX: aria-label add kar diya modal close button par */}
                <button 
                  aria-label="Close modal"
                  onClick={() => setIsModalOpen(false)}
                  className="text-[#16232A]/50 hover:text-[#FF5B04] transition-colors p-1"
                >
                  <FiX className="text-2xl" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto">
                <form id="addProductForm" onSubmit={handleAddProduct} className="space-y-5">
                  <div>
                    {/* FIX: htmlFor aur id connect kar diya */}
                    <label htmlFor="productName" className="block text-[10px] font-bold uppercase tracking-widest text-[#16232A]/70 mb-2 pl-1">Product Name *</label>
                    <input 
                      id="productName"
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#F5F7FA] border border-[#16232A]/5 text-sm font-bold px-4 py-3.5 rounded-xl outline-none focus:border-[#FF5B04] transition-colors" 
                      placeholder="e.g. Organic Cardamom" 
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      {/* FIX: htmlFor aur id connect kar diya */}
                      <label htmlFor="productCategory" className="block text-[10px] font-bold uppercase tracking-widest text-[#16232A]/70 mb-2 pl-1">Category</label>
                      <select 
                        id="productCategory"
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                        className="w-full bg-[#F5F7FA] border border-[#16232A]/5 text-sm font-bold px-4 py-3.5 rounded-xl outline-none focus:border-[#FF5B04] transition-colors appearance-none"
                      >
                        <option>Spices</option>
                        <option>Herbal Products</option>
                        <option>Food Grains</option>
                        <option>Leather Goods</option>
                      </select>
                    </div>
                    <div>
                      {/* FIX: htmlFor aur id connect kar diya */}
                      <label htmlFor="productStatus" className="block text-[10px] font-bold uppercase tracking-widest text-[#16232A]/70 mb-2 pl-1">Status</label>
                      <select 
                        id="productStatus"
                        value={formData.status}
                        onChange={(e) => setFormData({...formData, status: e.target.value})}
                        className="w-full bg-[#F5F7FA] border border-[#16232A]/5 text-sm font-bold px-4 py-3.5 rounded-xl outline-none focus:border-[#FF5B04] transition-colors appearance-none"
                      >
                        <option value="Active">Active</option>
                        <option value="Draft">Draft</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    {/* FIX: htmlFor aur id connect kar diya */}
                    <label htmlFor="productMoq" className="block text-[10px] font-bold uppercase tracking-widest text-[#16232A]/70 mb-2 pl-1">Minimum Order Qty (MOQ) *</label>
                    <input 
                      id="productMoq"
                      type="text" 
                      required
                      value={formData.moq}
                      onChange={(e) => setFormData({...formData, moq: e.target.value})}
                      className="w-full bg-[#F5F7FA] border border-[#16232A]/5 text-sm font-bold px-4 py-3.5 rounded-xl outline-none focus:border-[#FF5B04] transition-colors" 
                      placeholder="e.g. 2 Metric Tons" 
                    />
                  </div>
                </form>
              </div>

              <div className="p-6 border-t border-[#16232A]/5 bg-[#F5F7FA] flex justify-end gap-3">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-[#16232A] hover:bg-[#E4EEFO] transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  form="addProductForm"
                  className="bg-[#16232A] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#075056] transition-colors shadow-lg flex items-center gap-2"
                >
                  <FiCheck /> Save Product
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}