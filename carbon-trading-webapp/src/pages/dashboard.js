import React from 'react';
import { BarChart3, Users, FileText, TrendingUp, Search, Filter } from 'lucide-react';
import './dashboard.css';

const Dashboard = () => {
  // Mock data - replace with actual API calls
  const stats = [
    { title: 'Total Users', value: '1,234', icon: Users, trend: '+12%' },
    { title: 'Total Requests', value: '856', icon: FileText, trend: '+5%' },
    { title: 'Active Sessions', value: '45', icon: BarChart3, trend: '+8%' },
    { title: 'Growth Rate', value: '23%', icon: TrendingUp, trend: '+2%' }
  ];

  const recentActivity = [
    { id: 1, user: 'John Doe', action: 'Created new request', time: '2 hours ago' },
    { id: 2, user: 'Jane Smith', action: 'Updated profile', time: '3 hours ago' },
    { id: 3, user: 'Mike Johnson', action: 'Submitted document', time: '5 hours ago' },
    { id: 4, user: 'Sarah Wilson', action: 'Completed task', time: '6 hours ago' }
  ];

  const tableData = [
    { id: 1, name: 'Project Alpha', status: 'Active', progress: 75, date: '2024-03-15' },
    { id: 2, name: 'Project Beta', status: 'Pending', progress: 45, date: '2024-03-14' },
    { id: 3, name: 'Project Gamma', status: 'Completed', progress: 100, date: '2024-03-13' },
    { id: 4, name: 'Project Delta', status: 'Active', progress: 60, date: '2024-03-12' }
  ];

  return (
    <div className="dashboard">
      {/* Stats Overview */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">
              <stat.icon size={24} />
            </div>
            <div className="stat-info">
              <h3>{stat.title}</h3>
              <div className="stat-value">
                {stat.value}
                <span className="stat-trend">{stat.trend}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        {/* Recent Activity */}
        <div className="activity-section">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-dot"></div>
                <div className="activity-details">
                  <strong>{activity.user}</strong>
                  <span>{activity.action}</span>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Table */}
        <div className="table-section">
          <div className="table-header">
            <h2>Projects Overview</h2>
            <div className="table-actions">
              <div className="search-box">
                <Search size={18} />
                <input type="text" placeholder="Search projects..." />
              </div>
              <button className="filter-btn">
                <Filter size={18} />
                Filter
              </button>
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.name}</td>
                    <td>
                      <span className={`status-badge ${row.status.toLowerCase()}`}>
                        {row.status}
                      </span>
                    </td>
                    <td>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ width: `${row.progress}%` }}
                        ></div>
                        <span>{row.progress}%</span>
                      </div>
                    </td>
                    <td>{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;