import React, { useState } from 'react';
import type { Page } from '../App';
import UserIcon from '../components/icons/UserIcon';
import ShoppingBagIcon from '../components/icons/ShoppingBagIcon';

interface AdminPageProps {
  setPage: (page: Page) => void;
}

type AdminView = 'dashboard' | 'products' | 'orders';

// Mock Data
const mockProducts = [
  { id: 1, name: 'Everyday Comfort Legging', price: '$78.00', stock: 120, sales: 1500 },
  { id: 2, name: 'Flowy Performance Tee', price: '$42.00', stock: 300, sales: 950 },
  { id: 3, name: 'Go-To Zip Hoodie', price: '$95.00', stock: 80, sales: 600 },
  { id: 4, name: 'Sculpt & Support Bra', price: '$55.00', stock: 210, sales: 1240 },
];

const mockOrders = [
  { id: 'ORD-001', customer: 'Jessica M.', date: '2024-07-20', total: '$120.00', status: 'Shipped' },
  { id: 'ORD-002', customer: 'Sarah L.', date: '2024-07-20', total: '$84.00', status: 'Processing' },
  { id: 'ORD-003', customer: 'Mike P.', date: '2024-07-19', total: '$245.00', status: 'Shipped' },
  { id: 'ORD-004', customer: 'Emily R.', date: '2024-07-18', total: '$55.00', status: 'Delivered' },
];

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
        <div className="bg-brand-blue-100 p-3 rounded-full">{icon}</div>
        <div>
            <p className="text-sm text-slate-500">{title}</p>
            <p className="text-2xl font-bold text-slate-800">{value}</p>
        </div>
    </div>
);

const AdminPage: React.FC<AdminPageProps> = ({ setPage }) => {
  const [view, setView] = useState<AdminView>('dashboard');

  const renderView = () => {
    switch (view) {
      case 'products':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <div className="bg-white shadow-md rounded-lg overflow-x-auto">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product Name</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Stock</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Total Sales</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockProducts.map(p => (
                            <tr key={p.id}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{p.name}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{p.price}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{p.stock}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{p.sales}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </div>
        );
      case 'orders':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Orders</h2>
            <div className="bg-white shadow-md rounded-lg overflow-x-auto">
                <table className="min-w-full leading-normal">
                     <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Order ID</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Customer</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Total</th>
                             <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {mockOrders.map(o => (
                            <tr key={o.id}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{o.id}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{o.customer}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{o.date}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{o.total}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                                      o.status === 'Shipped' ? 'text-green-900' 
                                      : o.status === 'Processing' ? 'text-yellow-900' 
                                      : o.status === 'Delivered' ? 'text-blue-900'
                                      : 'text-gray-900'
                                    }`}>
                                        <span aria-hidden className={`absolute inset-0 ${
                                          o.status === 'Shipped' ? 'bg-green-200' 
                                          : o.status === 'Processing' ? 'bg-yellow-200' 
                                          : o.status === 'Delivered' ? 'bg-blue-200'
                                          : 'bg-gray-200'
                                        } opacity-50 rounded-full`}></span>
                                        <span className="relative">{o.status}</span>
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </div>
        );
      case 'dashboard':
      default:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Revenue" value="$48,329" icon={<UserIcon className="h-6 w-6 text-brand-blue-600" />} />
                <StatCard title="New Customers" value="134" icon={<UserIcon className="h-6 w-6 text-brand-blue-600" />} />
                <StatCard title="Total Orders" value="1,204" icon={<ShoppingBagIcon className="h-6 w-6 text-brand-blue-600" />} />
                <StatCard title="Pending Orders" value="12" icon={<ShoppingBagIcon className="h-6 w-6 text-brand-blue-600" />} />
            </div>
          </div>
        );
    }
  };

  const NavLink: React.FC<{ adminView: AdminView; children: React.ReactNode }> = ({ adminView, children }) => (
    <button
      onClick={() => setView(adminView)}
      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
        view === adminView
          ? 'bg-brand-blue-600 text-white shadow-sm'
          : 'text-slate-600 hover:bg-brand-blue-100'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <h1 className="text-xl font-bold text-brand-blue-700">Remix LLC - Admin</h1>
          <button
            onClick={() => setPage('home')}
            className="text-sm font-medium text-slate-600 hover:text-brand-blue-600"
          >
            &larr; Back to Site
          </button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <nav className="mb-8 flex space-x-2 sm:space-x-4">
            <NavLink adminView="dashboard">Dashboard</NavLink>
            <NavLink adminView="products">Products</NavLink>
            <NavLink adminView="orders">Orders</NavLink>
        </nav>
        {renderView()}
      </main>
    </div>
  );
};

export default AdminPage;
