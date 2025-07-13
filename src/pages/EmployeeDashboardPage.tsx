import React, { useState } from 'react';
import { 
  Shield, 
  CreditCard, 
  Activity, 
  CheckCircle, 
  Clock, 
  Settings,
  Share2,
  Download,
  Eye,
  Edit,
  RefreshCw,
  AlertTriangle,
  Building2,
  Calendar,
  Lock
} from 'lucide-react';

const EmployeeDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('passport');

  const mockData = {
    user: {
      name: 'John Doe',
      email: 'john.doe@company.com',
      role: 'Senior Developer',
      company: 'TechCorp Inc.',
      avatar: 'JD'
    },
    passport: {
      status: 'verified',
      verifiedDate: 'January 15, 2024',
      expiryDate: 'January 15, 2025',
      lastPulseCheck: '2 hours ago',
      nextPulseCheck: 'In 22 hours',
      verificationLevel: 'Advanced',
      passportId: 'RC-2024-001234'
    },
    employment: [
      {
        id: 1,
        company: 'TechCorp Inc.',
        role: 'Senior Developer',
        startDate: 'March 2023',
        status: 'active',
        verified: true
      },
      {
        id: 2,
        company: 'Previous Company',
        role: 'Developer',
        startDate: 'January 2021',
        endDate: 'February 2023',
        status: 'inactive',
        verified: true
      }
    ],
    activity: [
      { id: 1, action: 'Passport shared with NewTech Inc.', time: '1 hour ago', type: 'share' },
      { id: 2, action: 'Pulse check completed', time: '2 hours ago', type: 'verification' },
      { id: 3, action: 'Employment status updated', time: '1 day ago', type: 'update' },
      { id: 4, action: 'Verification completed', time: 'January 15, 2024', type: 'verification' }
    ],
    alerts: [
      {
        id: 1,
        type: 'warning',
        title: 'Verification Expiring Soon',
        message: 'Your verification will expire in 30 days. Please update your information.',
        action: 'Update Now'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">RemoteClear</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <Settings className="h-5 w-5" />
              </button>
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                {mockData.user.avatar}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Workplace Passport</h1>
          <p className="text-gray-600">Manage your verified employment status and professional identity</p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'passport', name: 'Passport', icon: CreditCard },
              { id: 'employment', name: 'Employment', icon: Building2 },
              { id: 'activity', name: 'Activity', icon: Activity },
              { id: 'alerts', name: 'Alerts', icon: AlertTriangle }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Passport Tab */}
        {activeTab === 'passport' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Passport Card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <CreditCard className="h-8 w-8 text-primary-600" />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">Workplace Passport</h2>
                      <p className="text-sm text-gray-600">Your verified professional identity</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 flex items-center space-x-2">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <p className="text-lg font-semibold text-gray-900">{mockData.user.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Current Role</label>
                      <p className="text-lg font-semibold text-gray-900">{mockData.user.role}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <p className="text-lg font-semibold text-gray-900">{mockData.user.company}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Passport ID</label>
                      <p className="text-sm font-mono text-gray-600">{mockData.passport.passportId}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Verification Status</label>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-lg font-semibold text-green-600">Verified</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Verification Level</label>
                      <p className="text-lg font-semibold text-gray-900">{mockData.passport.verificationLevel}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Verified Date</label>
                      <p className="text-sm text-gray-600">{mockData.passport.verifiedDate}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                      <p className="text-sm text-gray-600">{mockData.passport.expiryDate}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Continuous Authentication</h3>
                      <p className="text-sm text-gray-600">Last pulse check: {mockData.passport.lastPulseCheck}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RefreshCw className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Next check: {mockData.passport.nextPulseCheck}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 flex items-center justify-center space-x-2">
                    <Share2 className="h-4 w-4" />
                    <span>Share with Employer</span>
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 flex items-center justify-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Download PDF</span>
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 flex items-center justify-center space-x-2">
                    <Edit className="h-4 w-4" />
                    <span>Update Information</span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Account Security</span>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-600">Secure</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Data Encryption</span>
                    <div className="flex items-center space-x-1">
                      <Lock className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-600">Active</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Last Login</span>
                    <span className="text-sm text-gray-600">2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Employment Tab */}
        {activeTab === 'employment' && (
          <div className="bg-white rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Employment History</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {mockData.employment.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{job.company}</h4>
                        <p className="text-gray-600">{job.role}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {job.status}
                        </span>
                        {job.verified && (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{job.startDate} - {job.endDate || 'Present'}</span>
                      <span>{job.verified ? 'Verified' : 'Pending verification'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <div className="bg-white rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Activity Log</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {mockData.activity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      activity.type === 'verification' ? 'bg-green-500' :
                      activity.type === 'share' ? 'bg-blue-500' : 'bg-gray-500'
                    }`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium text-gray-900">{activity.action}</h4>
                        <span className="text-sm text-gray-500">{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Alerts Tab */}
        {activeTab === 'alerts' && (
          <div className="bg-white rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Alerts & Notifications</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {mockData.alerts.map((alert) => (
                  <div key={alert.id} className={`border rounded-lg p-4 ${
                    alert.type === 'warning' ? 'border-yellow-200 bg-yellow-50' : 'border-blue-200 bg-blue-50'
                  }`}>
                    <div className="flex items-start">
                      <AlertTriangle className={`h-5 w-5 mt-0.5 mr-3 ${
                        alert.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                      }`} />
                      <div className="flex-1">
                        <h4 className={`text-sm font-medium ${
                          alert.type === 'warning' ? 'text-yellow-800' : 'text-blue-800'
                        }`}>
                          {alert.title}
                        </h4>
                        <p className={`text-sm mt-1 ${
                          alert.type === 'warning' ? 'text-yellow-700' : 'text-blue-700'
                        }`}>
                          {alert.message}
                        </p>
                        <div className="mt-3">
                          <button className={`text-sm font-medium ${
                            alert.type === 'warning' ? 'text-yellow-800 hover:text-yellow-900' : 'text-blue-800 hover:text-blue-900'
                          }`}>
                            {alert.action}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeDashboardPage; 