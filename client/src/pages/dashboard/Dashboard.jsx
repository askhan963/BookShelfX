import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import getBaseUrl from '../../utils/baseURL';
import { MdIncompleteCircle } from 'react-icons/md';
import RevenueChart from './RevenueChart';
import Swal from 'sweetalert2';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${getBaseUrl()}/api/admin`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json',
                    },
                });

                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
                Swal.fire({
                    title: "Error",
                    text: "Failed to load dashboard data. Please try again.",
                    icon: "error",
                    confirmButtonText: "OK"
                });
                navigate("/login");
            }
        };

        fetchData();
    }, [navigate]);

    if (loading) return <Loading />;

    return (
        <>
            <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                <DashboardCard
                    title="Products"
                    value={data?.totalBooks || "N/A"}
                    icon={
                        <svg
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                        </svg>
                    }
                    iconBg="bg-purple-100"
                    iconColor="text-purple-600"
                />
                <DashboardCard
                    title="Total Sales"
                    value={`$${data?.totalSales || "0.00"}`}
                    icon={
                        <svg
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                        </svg>
                    }
                    iconBg="bg-green-100"
                    iconColor="text-green-600"
                />
                <DashboardCard
                    title="Trending Books (This Month)"
                    value={`${data?.trendingBooks || 0}`}
                    icon={
                        <svg
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                            />
                        </svg>
                    }
                    iconBg="bg-red-100"
                    iconColor="text-red-600"
                />
                <DashboardCard
                    title="Total Orders"
                    value={data?.totalOrders || "N/A"}
                    icon={<MdIncompleteCircle className="h-6 w-6" />}
                    iconBg="bg-blue-100"
                    iconColor="text-blue-600"
                />
            </section>

            <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
                <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow-lg rounded-lg">
                    <div className="px-6 py-5 font-semibold border-b border-gray-100">Number of Orders Per Month</div>
                    <div className="p-4 flex-grow">
                        <RevenueChart />
                    </div>
                </div>
                <DashboardCard
                    title="Orders Left"
                    value={data?.ordersLeft || "0"}
                    iconColor="text-yellow-600"
                    iconBg="bg-yellow-100"
                />
                <DashboardCard
                    title="Website Visits (Last Day)"
                    value={data?.websiteVisits || "0"}
                    iconColor="text-teal-600"
                    iconBg="bg-teal-100"
                />
            </section>
        </>
    );
};

const DashboardCard = ({ title, value, icon, iconBg, iconColor }) => (
    <div className="flex items-center p-8 bg-white shadow-lg rounded-lg">
        <div
            className={`inline-flex items-center justify-center h-16 w-16 ${iconColor} ${iconBg} rounded-full mr-6`}
        >
            {icon}
        </div>
        <div>
            <span className="block text-2xl font-bold">{value}</span>
            <span className="block text-gray-500">{title}</span>
        </div>
    </div>
);

export default Dashboard;
