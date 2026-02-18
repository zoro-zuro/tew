import { useState, useEffect } from 'react';
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import SectionWrapper from '../components/common/SectionWrapper';
import Badge from '../components/common/Badge';
import { Lock, ArrowRight, Eye, EyeOff, User, Mail, Phone, MapPin, Briefcase, Calendar, X, ExternalLink, Settings, ShieldCheck, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminPortal = () => {
    const [accessKey, setAccessKey] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [error, setError] = useState("");
    const [showKey, setShowKey] = useState(false);
    const [selectedContact, setSelectedContact] = useState<any>(null);

    // Search and Filter States
    const [searchQuery, setSearchQuery] = useState("");
    const [filterSource, setFilterSource] = useState("all");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    // Admin Key Management States
    const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);
    const [currentKeyInput, setCurrentKeyInput] = useState("");
    const [newKeyInput, setNewKeyInput] = useState("");
    const [confirmKeyInput, setConfirmKeyInput] = useState("");
    const [showCurrentKey, setShowCurrentKey] = useState(false);
    const [showNewKey, setShowNewKey] = useState(false);
    const [showConfirmKey, setShowConfirmKey] = useState(false);
    const [keyUpdateError, setKeyUpdateError] = useState("");
    const [keyUpdateSuccess, setKeyUpdateSuccess] = useState(false);
    const [isUpdatingKey, setIsUpdatingKey] = useState(false);

    const contacts = useQuery(api.contacts.getContacts, isAuthorized ? {} : "skip" as any);
    const adminKey = useQuery(api.adminSettings.getAdminKey);
    const updateKeyMutation = useMutation(api.adminSettings.updateAdminKey);

    useEffect(() => {
        const savedKey = localStorage.getItem('admin_access_key');
        if (adminKey && savedKey === adminKey) {
            setIsAuthorized(true);
        }
    }, [adminKey]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (adminKey && accessKey === adminKey) {
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

    const handleUpdateKey = async (e: React.FormEvent) => {
        e.preventDefault();
        setKeyUpdateError("");
        setKeyUpdateSuccess(false);

        if (newKeyInput !== confirmKeyInput) {
            setKeyUpdateError("New keys do not match");
            return;
        }

        if (!newKeyInput) {
            setKeyUpdateError("New key cannot be empty");
            return;
        }

        setIsUpdatingKey(true);
        try {
            await updateKeyMutation({
                currentKey: currentKeyInput,
                newKey: newKeyInput
            });
            setKeyUpdateSuccess(true);
            localStorage.setItem('admin_access_key', newKeyInput);
            // Reset fields after successful update
            setTimeout(() => {
                setIsKeyModalOpen(false);
                setKeyUpdateSuccess(false);
                setCurrentKeyInput("");
                setNewKeyInput("");
                setConfirmKeyInput("");
            }, 2000);
        } catch (err: any) {
            setKeyUpdateError(err.message || "Failed to update key");
        } finally {
            setIsUpdatingKey(false);
        }
    };

    const filteredContacts = contacts?.filter(contact => {
        const matchesSearch =
            contact.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.companyName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.businessEmail.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesSource = filterSource === "all" || contact.source === filterSource;

        const submissionDate = new Date(contact.createdAt);
        const matchesStartDate = !startDate || submissionDate >= new Date(startDate);
        const matchesEndDate = !endDate || submissionDate <= new Date(new Date(endDate).setHours(23, 59, 59, 999));

        return matchesSearch && matchesSource && matchesStartDate && matchesEndDate;
    });

    if (!isAuthorized) {
        return (
            <SectionWrapper id="admin-login" className="bg-black min-h-screen flex items-center justify-center p-0">
                <div className="w-full h-screen flex items-center justify-center  px-6">
                    <div className="bg-white/10 border border-white/20 rounded-[32px] p-8 sm:p-12 backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-70" />

                        <div className="flex flex-col items-center text-center mb-10">
                            <div className="w-16 h-16 bg-brand/20 rounded-2xl flex items-center justify-center mb-6 border border-brand/30">
                                <Lock className="text-brand" size={28} />
                            </div>
                            <h1 className="font-montserrat font-bold text-2xl text-white mb-2">Admin Access</h1>
                            <p className="font-poppins text-white/60 text-sm">Enter your secure access key to proceed</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <div className="relative">
                                    <input
                                        type={showKey ? "text" : "password"}
                                        value={accessKey}
                                        onChange={(e) => setAccessKey(e.target.value)}
                                        placeholder="Access Key"
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-brand/50 transition-all font-mono"
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
            <div className="max-w-[1400px] mx-auto w-full pt-10 px-6 lg:px-10">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-6 ">
                    <div className="flex flex-col items-center sm:items-start">
                        <Badge title="Control Panel" />
                        <h1 className="heading text-black mt-4">Leads Management</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsKeyModalOpen(true)}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-700 font-bold text-sm hover:border-brand/40 hover:text-brand transition-all shadow-sm"
                        >
                            <Settings size={16} />
                            Set Key
                        </button>
                        <button
                            onClick={handleLogout}
                            className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-600 font-semibold text-sm hover:bg-gray-100 transition-all"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>

                {contacts === undefined ? (
                    <div className="flex flex-col items-center justify-center py-40">
                        <div className="w-10 h-10 border-2 border-brand border-t-transparent rounded-full animate-spin mb-4" />
                        <p className="text-gray-500 font-medium text-sm">Syncing with database...</p>
                    </div>
                ) : (
                    <>
                        {/* Single Row Filter Bar */}
                        <div className="flex flex-col lg:flex-row items-center gap-4 mb-8 bg-white p-4 rounded-[24px] border border-gray-200 shadow-sm">
                            <div className="flex-1 w-full relative">
                                <input
                                    type="text"
                                    placeholder="Search by name, company..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3 bg-gray-100 border border-transparent rounded-xl focus:outline-none focus:bg-white focus:border-brand/30 transition-all text-sm font-medium text-gray-800 placeholder:text-gray-500"
                                />
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                    <Eye size={18} />
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                                <div className="flex items-center gap-2 bg-gray-100 px-3 py-2.5 rounded-xl border border-transparent">
                                    <Calendar size={14} className="text-gray-500" />
                                    <input
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        className="bg-transparent text-[11px] font-bold text-gray-700 focus:outline-none"
                                    />
                                    <span className="text-gray-400 text-[10px]">-</span>
                                    <input
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        className="bg-transparent text-[11px] font-bold text-gray-700 focus:outline-none"
                                    />
                                    {(startDate || endDate) && (
                                        <button
                                            onClick={() => { setStartDate(""); setEndDate(""); }}
                                            className="ml-1 text-[10px] text-brand hover:underline font-bold"
                                        >
                                            <X size={12} />
                                        </button>
                                    )}
                                </div>

                                <select
                                    value={filterSource}
                                    onChange={(e) => setFilterSource(e.target.value)}
                                    className="px-4 py-2.5 bg-gray-100 border border-transparent rounded-xl focus:outline-none focus:bg-white focus:border-brand/30 text-xs font-black uppercase tracking-wider text-gray-600 appearance-none cursor-pointer"
                                >
                                    <option value="all">Sources: All</option>
                                    <option value="contact_page">Contact Page</option>
                                    <option value="contact_section">Contact Section</option>
                                </select>
                            </div>
                        </div>

                        {filteredContacts?.length === 0 ? (
                            <div className="text-center bg-white border border-gray-200 rounded-[32px] p-24 shadow-sm">
                                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Briefcase className="text-gray-300" size={32} />
                                </div>
                                <p className="text-gray-500 font-medium">No lead submissions match your criteria.</p>
                            </div>
                        ) : (
                            <div className="bg-white border border-gray-200 rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-20">
                                <div className="overflow-x-auto overflow-y-auto max-h-[600px] custom-scrollbar-hidden">
                                    <table className="w-full text-left border-collapse table-auto">
                                        <thead className="sticky top-0 z-10 bg-white shadow-sm shadow-gray-200/20">
                                            <tr className="bg-gray-100 border-b border-gray-200">
                                                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-gray-500">Date</th>
                                                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-gray-500">Lead Name</th>
                                                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-gray-500">Company</th>
                                                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-gray-500">Email</th>
                                                <th className="px-6 py-5 text-[10px) font-black uppercase tracking-widest text-gray-500">Channel</th>
                                                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-gray-500 text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {filteredContacts?.map((contact) => (
                                                <tr
                                                    key={contact._id}
                                                    className="hover:bg-gray-50 transition-colors group cursor-pointer"
                                                    onClick={() => setSelectedContact(contact)}
                                                >
                                                    <td className="px-6 py-5">
                                                        <div className="flex flex-col">
                                                            <span className="text-sm font-bold text-gray-900">
                                                                {new Date(contact.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                                            </span>
                                                            <span className="text-[10px] text-gray-500 uppercase font-bold">
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
                                                        <span className="text-sm font-medium text-gray-700 truncate max-w-[150px] inline-block">
                                                            {contact.companyName || <span className="text-gray-400 italic font-normal text-xs">Individual</span>}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        <span className="text-sm font-medium text-gray-600">{contact.businessEmail}</span>
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        <span className={`text-[9px] px-2.5 py-1 rounded-full font-black uppercase tracking-widest border shadow-sm ${contact.source === 'contact_page'
                                                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                                                            : 'bg-orange-50 text-orange-700 border-orange-200'
                                                            }`}>
                                                            {contact.source.replace('_', ' ')}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-5 text-right">
                                                        <button
                                                            className="p-2 rounded-lg bg-gray-100 text-gray-500 group-hover:bg-brand group-hover:text-white transition-all transform group-hover:scale-110 border border-gray-200"
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
                    </>
                )}
            </div>

            {/* Lead Details Modal */}
            <AnimatePresence>
                {selectedContact && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedContact(null)}
                            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white rounded-[32px] w-full max-w-2xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            <div className="relative h-24 bg-brand flex items-center justify-between px-8 text-white flex-shrink-0">
                                <div className="absolute top-0 right-0 w-48 h-full bg-white/10 skew-x-[30deg] translate-x-24" />
                                <div className="z-10">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-1">Lead Submission Detail</p>
                                    <h2 className="text-2xl font-montserrat font-black truncate">{selectedContact.fullName}</h2>
                                </div>
                                <button
                                    onClick={() => setSelectedContact(null)}
                                    className="z-10 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors border border-white/20"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-8 overflow-y-auto custom-scrollbar-hidden space-y-8">
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
                                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-2 font-bold">
                                            <Briefcase size={14} /> Requirement Type
                                        </p>
                                        <p className="text-gray-900 font-bold text-lg">{selectedContact.requirement}</p>
                                    </div>
                                )}

                                {selectedContact.message && (
                                    <div className="bg-brand/5 border border-brand/20 rounded-2xl p-6">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-brand mb-3 font-bold">Submission Message</p>
                                        <p className="text-gray-800 leading-relaxed font-semibold italic text-lg">"{selectedContact.message}"</p>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 bg-gray-50 border-t border-gray-200 mt-auto flex justify-end flex-shrink-0">
                                <button
                                    onClick={() => setSelectedContact(null)}
                                    className="px-8 py-3 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-black transition-colors shadow-lg"
                                >
                                    Close Details
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Set Key Modal */}
            <AnimatePresence>
                {isKeyModalOpen && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => !isUpdatingKey && setIsKeyModalOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            className="bg-white rounded-[32px] w-full max-w-md shadow-2xl relative overflow-hidden"
                        >
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h2 className="text-xl font-montserrat font-black text-gray-900">Security Settings</h2>
                                        <p className="text-xs text-gray-500 font-semibold mt-1">Update your admin access key</p>
                                    </div>
                                    <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center border border-brand/20">
                                        <ShieldCheck className="text-brand" size={24} />
                                    </div>
                                </div>

                                <form onSubmit={handleUpdateKey} className="space-y-5">
                                    <KeyInput
                                        id="current-key"
                                        label="Current Access Key"
                                        value={currentKeyInput}
                                        onChange={setCurrentKeyInput}
                                        show={showCurrentKey}
                                        toggleShow={() => setShowCurrentKey(!showCurrentKey)}
                                        placeholder="Type current key"
                                    />

                                    <div className="h-px bg-gray-200 w-full my-6" />

                                    <KeyInput
                                        id="new-key"
                                        label="New Access Key"
                                        value={newKeyInput}
                                        onChange={setNewKeyInput}
                                        show={showNewKey}
                                        toggleShow={() => setShowNewKey(!showNewKey)}
                                        placeholder="Set new key"
                                    />

                                    <KeyInput
                                        id="confirm-key"
                                        label="Confirm New Key"
                                        value={confirmKeyInput}
                                        onChange={setConfirmKeyInput}
                                        show={showConfirmKey}
                                        toggleShow={() => setShowConfirmKey(!showConfirmKey)}
                                        placeholder="Repeat new key"
                                        error={confirmKeyInput && newKeyInput !== confirmKeyInput ? "Keys do not match" : ""}
                                    />

                                    {keyUpdateError && (
                                        <div className="flex items-center gap-2 p-3 bg-red-50 rounded-xl text-red-600 font-bold text-xs border border-red-100">
                                            <AlertCircle size={14} />
                                            {keyUpdateError}
                                        </div>
                                    )}

                                    {keyUpdateSuccess && (
                                        <div className="flex items-center gap-2 p-3 bg-green-50 rounded-xl text-green-600 font-bold text-xs border border-green-100">
                                            <ShieldCheck size={14} />
                                            Key updated successfully!
                                        </div>
                                    )}

                                    <div className="flex gap-3 pt-4">
                                        <button
                                            type="button"
                                            onClick={() => setIsKeyModalOpen(false)}
                                            disabled={isUpdatingKey}
                                            className="flex-1 py-3.5 rounded-xl border border-gray-300 text-gray-600 font-bold text-xs hover:bg-gray-50 transition-all disabled:opacity-50"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isUpdatingKey || !currentKeyInput || !newKeyInput || newKeyInput !== confirmKeyInput}
                                            className="flex-[2] py-3.5 rounded-xl font-bold text-white text-xs transition-all disabled:grayscale disabled:opacity-50 shadow-lg"
                                            style={{
                                                background: '#FE5200',
                                                backgroundImage: `linear-gradient(180deg, #FFA880 0%, #FE5200 100%)`,
                                                boxShadow: '0px 4px 12px rgba(254, 82, 0, 0.2)'
                                            }}
                                        >
                                            {isUpdatingKey ? "Updating..." : "Update Key"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </SectionWrapper>
    );
};

const KeyInput = ({ id, label, value, onChange, show, toggleShow, placeholder, error }: any) => (
    <div className="space-y-2">
        <label htmlFor={id} className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">{label}</label>
        <div className="relative">
            <input
                id={id}
                type={show ? "text" : "password"}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={`w-full bg-gray-50 border ${error ? 'border-red-300' : 'border-gray-300'} rounded-xl px-4 py-3.5 text-sm font-bold text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-brand/40 transition-all font-mono`}
            />
            <button
                type="button"
                onClick={toggleShow}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors"
            >
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
        </div>
        {error && <p className="text-[10px] text-red-600 font-bold ml-1">{error}</p>}
    </div>
);

const DetailItem = ({ icon, label, value, isLink }: any) => (
    <div className="flex flex-col gap-1.5">
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 flex items-center gap-2">
            <span className="text-brand opacity-80">{icon}</span> {label}
        </span>
        {isLink ? (
            <a href={isLink} className="text-gray-900 font-bold hover:text-brand transition-colors text-lg">
                {value}
            </a>
        ) : (
            <span className="text-gray-900 font-bold text-lg">{value}</span>
        )}
    </div>
);

export default AdminPortal;
