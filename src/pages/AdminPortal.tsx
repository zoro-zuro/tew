import { useState, useEffect } from 'react';
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import SectionWrapper from '../components/common/SectionWrapper';
import Badge from '../components/common/Badge';
import { Lock, ArrowRight, Eye, EyeOff, User, Mail, Phone, MapPin, Briefcase, Calendar, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ADMIN_ACCESS_KEY = "TEW-ADMIN-2026"; // Default key

const AdminPortal = () => {
    const [accessKey, setAccessKey] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [error, setError] = useState("");
    const [showKey, setShowKey] = useState(false);
    const [selectedContact, setSelectedContact] = useState<any>(null);

    const contacts = useQuery(api.contacts.getContacts, isAuthorized ? {} : "skip" as any);

    useEffect(() => {
        const savedKey = localStorage.getItem('admin_access_key');
        if (savedKey === ADMIN_ACCESS_KEY) {
            setIsAuthorized(true);
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (accessKey === ADMIN_ACCESS_KEY) {
            setIsAuthorized(true);
            localStorage.setItem('admin_access_key', accessKey);
            setError("");
        } else {
            setError("Invalid access key. Please try again.");
        }
    };

    const handleLogout = () => {
        setIsAuthorized(false);
        localStorage.removeItem('admin_access_key');
        setAccessKey("");
    };

    if (!isAuthorized) {
        return (
            <SectionWrapper id="admin-login" className="bg-black min-h-screen flex items-center justify-center p-0">
                <div className="w-full h-screen flex items-center justify-center  px-6">
                    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 sm:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-50" />

                        <div className="flex flex-col items-center text-center mb-10">
                            <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-6 border border-brand/20">
                                <Lock className="text-brand" size={28} />
                            </div>
                            <h1 className="font-montserrat font-bold text-2xl text-white mb-2">Admin Access</h1>
                            <p className="font-poppins text-white/40 text-sm">Enter your secure access key to proceed</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <div className="relative">
                                    <input
                                        type={showKey ? "text" : "password"}
                                        value={accessKey}
                                        onChange={(e) => setAccessKey(e.target.value)}
                                        placeholder="Access Key"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand/50 transition-all font-mono"
                                        autoFocus
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowKey(!showKey)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                                    >
                                        {showKey ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                                {error && (
                                    <p className="text-red-500 text-xs font-medium pl-1">{error}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl font-montserrat font-bold text-white uppercase tracking-widest text-sm flex items-center justify-center gap-2 group/btn transition-all duration-300"
                                style={{
                                    background: '#FE5200',
                                    backgroundImage: `linear-gradient(180deg, #FFA880 0%, #FE5200 100%)`,
                                    boxShadow: '0px 4px 20px rgba(254, 82, 0, 0.4)'
                                }}
                            >
                                Authenticate
                                <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                            </button>
                        </form>
                    </div>
                </div>
            </SectionWrapper>
        );
    }

    return (
        <SectionWrapper id="admin" className="bg-[#fcfcfc] min-h-screen font-poppins py-0">
            <div className="max-w-[1400px] mx-auto pt-10 pb-20 px-6">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6">
                    <div className="flex flex-col items-center sm:items-start">
                        <Badge title="Control Panel" />
                        <h1 className="heading text-black mt-4">Leads Management</h1>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-500 font-semibold text-sm hover:bg-gray-50 transition-all"
                    >
                        Sign Out
                    </button>
                </div>

                {contacts === undefined ? (
                    <div className="flex flex-col items-center justify-center py-40">
                        <div className="w-10 h-10 border-2 border-brand border-t-transparent rounded-full animate-spin mb-4" />
                        <p className="text-gray-400 font-medium text-sm">Syncing with database...</p>
                    </div>
                ) : contacts.length === 0 ? (
                    <div className="text-center bg-white border border-gray-100 rounded-[32px] p-24 shadow-sm">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Briefcase className="text-gray-200" size={32} />
                        </div>
                        <p className="text-gray-400 font-medium">No lead submissions found yet.</p>
                    </div>
                ) : (
                    <div className="bg-white border border-gray-100 rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50/50 border-b border-gray-100">
                                        <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Date</th>
                                        <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Lead Name</th>
                                        <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Company</th>
                                        <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Email</th>
                                        <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">Channel</th>
                                        <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {contacts.map((contact) => (
                                        <tr
                                            key={contact._id}
                                            className="hover:bg-gray-50/80 transition-colors group cursor-pointer"
                                            onClick={() => setSelectedContact(contact)}
                                        >
                                            <td className="px-6 py-5">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-gray-900">
                                                        {new Date(contact.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                                    </span>
                                                    <span className="text-[10px] text-gray-400 uppercase font-bold">
                                                        {new Date(contact.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-xs">
                                                        {contact.fullName.charAt(0)}
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-800">{contact.fullName}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="text-sm font-medium text-gray-600 truncate max-w-[150px] inline-block">
                                                    {contact.companyName || <span className="text-gray-300 italic">Individual</span>}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="text-sm font-medium text-gray-500">{contact.businessEmail}</span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className={`text-[9px] px-2.5 py-1 rounded-full font-black uppercase tracking-widest border ${contact.source === 'contact_page'
                                                    ? 'bg-blue-50 text-blue-600 border-blue-100'
                                                    : 'bg-orange-50 text-orange-600 border-orange-100'
                                                    }`}>
                                                    {contact.source.replace('_', ' ')}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <button
                                                    className="p-2 rounded-lg bg-gray-100 text-gray-400 group-hover:bg-brand group-hover:text-white transition-all transform group-hover:scale-110"
                                                >
                                                    <ExternalLink size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            {/* Backdrop & Modal */}
            <AnimatePresence>
                {selectedContact && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedContact(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white rounded-[32px] w-full max-w-2xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Modal Header */}
                            <div className="relative h-24 bg-brand flex items-center justify-between px-8 text-white">
                                <div className="absolute top-0 right-0 w-48 h-full bg-white/10 skew-x-[30deg] translate-x-24" />
                                <div className="z-10">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70 mb-1">Lead Submission Detail</p>
                                    <h2 className="text-2xl font-montserrat font-black truncate">{selectedContact.fullName}</h2>
                                </div>
                                <button
                                    onClick={() => setSelectedContact(null)}
                                    className="z-10 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8 overflow-y-auto custom-scrollbar space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <DetailItem
                                        icon={<User size={18} />}
                                        label="Company / Entity"
                                        value={selectedContact.companyName || "Personal Inquiry"}
                                    />
                                    <DetailItem
                                        icon={<Briefcase size={18} />}
                                        label="Lead Source"
                                        value={selectedContact.source.replace('_', ' ').toUpperCase()}
                                    />
                                    <DetailItem
                                        icon={<Mail size={18} />}
                                        label="Email Address"
                                        value={selectedContact.businessEmail}
                                        isLink={`mailto:${selectedContact.businessEmail}`}
                                    />
                                    <DetailItem
                                        icon={<Phone size={18} />}
                                        label="Contact Number"
                                        value={selectedContact.phoneNumber}
                                        isLink={`tel:${selectedContact.phoneNumber}`}
                                    />
                                    <DetailItem
                                        icon={<MapPin size={18} />}
                                        label="Location"
                                        value={selectedContact.location || "Not Provided"}
                                    />
                                    <DetailItem
                                        icon={<Calendar size={18} />}
                                        label="Submission Date"
                                        value={new Date(selectedContact.createdAt).toLocaleString()}
                                    />
                                </div>

                                {selectedContact.requirement && (
                                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                                            <Briefcase size={14} /> Requirement Type
                                        </p>
                                        <p className="text-gray-800 font-bold">{selectedContact.requirement}</p>
                                    </div>
                                )}

                                {selectedContact.message && (
                                    <div className="bg-brand/5 border border-brand/10 rounded-2xl p-6">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-brand mb-3">Submission Message</p>
                                        <p className="text-gray-700 leading-relaxed font-medium italic">"{selectedContact.message}"</p>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 bg-gray-50/50 border-t border-gray-100 mt-auto flex justify-end">
                                <button
                                    onClick={() => setSelectedContact(null)}
                                    className="px-8 py-3 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-black transition-colors"
                                >
                                    Close Details
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </SectionWrapper>
    );
};

const DetailItem = ({ icon, label, value, isLink }: any) => (
    <div className="flex flex-col gap-1.5">
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
            {icon} {label}
        </span>
        {isLink ? (
            <a href={isLink} className="text-gray-900 font-bold hover:text-brand transition-colors">
                {value}
            </a>
        ) : (
            <span className="text-gray-900 font-bold">{value}</span>
        )}
    </div>
);

export default AdminPortal;
