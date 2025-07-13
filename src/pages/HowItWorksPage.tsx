import React from 'react';
import { 
  UserPlus, 
  Shield, 
  CreditCard, 
  Activity, 
  CheckCircle, 
  ArrowRight,
  Building2,
  Users,
  Lock,
  Zap
} from 'lucide-react';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How RemoteClear Works
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            A simple, secure, and transparent process that builds trust between 
            employers and remote workers
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Step 1 */}
            <div className="order-1 lg:order-1">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sign Up & Invite
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Companies register with RemoteClear and invite their remote workers to join the platform. 
                Each worker receives a secure invitation with their unique verification link.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Company creates account</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Invite workers via email</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Secure invitation links</span>
                </div>
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <Building2 className="h-8 w-8 text-primary-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Company Dashboard</h3>
                    <p className="text-sm text-gray-600">Manage your remote team</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm text-gray-600">Pending Invitations</span>
                    <span className="text-sm font-medium text-primary-600">12</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm text-gray-600">Verified Workers</span>
                    <span className="text-sm font-medium text-green-600">45</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm text-gray-600">Active Passports</span>
                    <span className="text-sm font-medium text-blue-600">38</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <Shield className="h-8 w-8 text-primary-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Identity Verification</h3>
                    <p className="text-sm text-gray-600">Secure one-time process</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">Government ID verification</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">Biometric authentication</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">Background check</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Verify Identity
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Workers complete a comprehensive, one-time identity verification process that includes 
                government ID verification, biometric authentication, and background checks.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Government ID verification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Biometric authentication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Background check</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get Workplace Passport
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Once verified, workers receive their digital Workplace Passport - a secure, 
                employee-controlled credential that proves their verified status.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Digital credential creation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Employee-controlled access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Secure sharing capabilities</span>
                </div>
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <CreditCard className="h-8 w-8 text-primary-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Workplace Passport</h3>
                    <p className="text-sm text-gray-600">Your verified identity</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">John Doe</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Verified</span>
                    </div>
                    <p className="text-xs text-gray-600">Senior Developer at TechCorp</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">Verification Date</span>
                    </div>
                    <p className="text-xs text-gray-600">January 15, 2024</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">Status</span>
                    </div>
                    <p className="text-xs text-gray-600">Active - Pulse Check Passed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <Activity className="h-8 w-8 text-primary-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Continuous Authentication</h3>
                    <p className="text-sm text-gray-600">Ongoing verification</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm text-gray-600">Last Pulse Check</span>
                    <span className="text-sm font-medium text-green-600">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm text-gray-600">Next Check</span>
                    <span className="text-sm font-medium text-blue-600">In 22 hours</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm text-gray-600">Security Status</span>
                    <span className="text-sm font-medium text-green-600">Secure</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Secure
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The system performs periodic "Pulse Checks" to ensure verification data remains 
                current and accounts stay secure, giving employers ongoing peace of mind.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Automatic background checks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Real-time status updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Security monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join the thousands of companies already using RemoteClear to build 
            trusted remote teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/for-businesses"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              For Businesses
            </a>
            <a
              href="/for-employees"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              For Employees
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage; 