import { useState } from 'react'
import { Layout } from '../components/Layout'
import { Icon } from '../components/ui'

export function RegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [role, setRole] = useState<'miner' | 'buyer'>('miner')
  const totalSteps = 4

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <Layout headerVariant="minimal" showFooter={false}>
      <main className="flex-grow bg-[#f8f9fa] py-lg px-margin-mobile bg-pattern">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-outline-variant rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
            <aside className="md:w-72 bg-surface-container p-md border-r border-outline-variant flex flex-col">
              <h2 className="text-headline-sm text-primary mb-md font-bold">Registration</h2>
              <nav className="space-y-gutter flex-grow">
                {[
                  { step: 1, title: 'Entity Type', sub: 'Miner or Buyer' },
                  { step: 2, title: 'Identity', sub: 'Profile Details' },
                  { step: 3, title: 'Verification', sub: 'Legal Compliance' },
                  { step: 4, title: 'Security', sub: 'Credentials' },
                ].map((s) => (
                  <div
                    key={s.step}
                    className={`flex items-center gap-sm transition-opacity ${
                      currentStep === s.step ? 'opacity-100' : currentStep > s.step ? 'opacity-80' : 'opacity-50'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold transition-colors ${
                        currentStep === s.step
                          ? 'border-primary text-primary'
                          : currentStep > s.step
                          ? 'bg-primary text-on-primary border-primary'
                          : 'border-outline-variant text-on-surface-variant'
                      }`}
                    >
                      {currentStep > s.step ? <Icon name="check" className="text-sm" /> : s.step}
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-label-md font-semibold ${currentStep === s.step ? 'text-primary' : ''}`}>{s.title}</span>
                      <span className="text-xs text-on-surface-variant">{s.sub}</span>
                    </div>
                  </div>
                ))}
              </nav>
              <div className="mt-lg pt-md border-t border-outline-variant">
              </div>
            </aside>

            <div className="flex-grow p-md md:p-lg relative">
              <form className="space-y-lg" onSubmit={(e) => e.preventDefault()}>
                {currentStep === 1 && (
                  <section className="space-y-md animate-fade-in">
                    <div className="border-b-2 border-secondary-fixed pb-base mb-md">
                      <h3 className="text-headline-md text-primary font-bold">Choose Your Role</h3>
                      <p className="text-on-surface-variant">Select the type of account that matches your operations.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                      <label className="relative cursor-pointer group">
                        <input
                          type="radio"
                          name="role"
                          value="miner"
                          className="peer sr-only"
                          checked={role === 'miner'}
                          onChange={() => setRole('miner')}
                        />
                        <div className="h-full p-md border-2 border-outline-variant rounded-xl group-hover:border-primary-container peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex flex-col items-center text-center">
                          <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-sm text-primary group-hover:scale-110 transition-transform">
                            <Icon name="construction" className="text-4xl" />
                          </div>
                          <span className="text-headline-sm text-primary block mb-xs font-bold">Miner</span>
                          <p className="text-sm text-on-surface-variant">
                            For individual artisanal miners or commercial mining operations seeking to trace and sell gold.
                          </p>
                        </div>
                      </label>
                      <label className="relative cursor-pointer group">
                        <input
                          type="radio"
                          name="role"
                          value="buyer"
                          className="peer sr-only"
                          checked={role === 'buyer'}
                          onChange={() => setRole('buyer')}
                        />
                        <div className="h-full p-md border-2 border-outline-variant rounded-xl group-hover:border-primary-container peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex flex-col items-center text-center">
                          <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-sm text-primary group-hover:scale-110 transition-transform">
                            <Icon name="account_balance" className="text-4xl" />
                          </div>
                          <span className="text-headline-sm text-primary block mb-xs font-bold">Buyer</span>
                          <p className="text-sm text-on-surface-variant">
                            For authorized exporters, refineries, or commercial buyers looking to verify and purchase traced gold.
                          </p>
                        </div>
                      </label>
                    </div>
                  </section>
                )}

                {currentStep === 2 && (
                  <section className="space-y-md animate-fade-in">
                    <div className="border-b-2 border-secondary-fixed pb-base mb-md">
                      <h3 className="text-headline-md text-primary font-bold">
                        {role === 'miner' ? 'Miner Details' : 'Buyer & Company Details'}
                      </h3>
                      <p className="text-on-surface-variant">Please provide your personal and professional identification.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                      <div className="md:col-span-2">
                        <label className="block font-bold text-sm text-on-surface mb-xs uppercase tracking-wider">Full Legal Name</label>
                        <input
                          type="text"
                          className="w-full bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-md py-sm"
                          placeholder="As shown on official ID"
                        />
                      </div>
                      {role === 'miner' ? (
                        <div>
                          <label className="block font-bold text-sm text-on-surface mb-xs uppercase tracking-wider">National ID / Passport</label>
                          <input
                            type="text"
                            className="w-full bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-md py-sm"
                            placeholder="Enter ID number"
                          />
                        </div>
                      ) : (
                        <div>
                          <label className="block font-bold text-sm text-on-surface mb-xs uppercase tracking-wider">Company Reg Number</label>
                          <input
                            type="text"
                            className="w-full bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-md py-sm"
                            placeholder="PACRA ID Number"
                          />
                        </div>
                      )}
                      <div>
                        <label className="block font-bold text-sm text-on-surface mb-xs uppercase tracking-wider">Phone Number</label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-outline-variant bg-surface-container text-on-surface-variant font-semibold">
                            +260
                          </span>
                          <input
                            type="tel"
                            className="flex-1 min-w-0 bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-r-lg px-md py-sm"
                            placeholder="9xx xxx xxx"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block font-bold text-sm text-on-surface mb-xs uppercase tracking-wider">Operation Location</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-on-surface-variant">
                            <Icon name="location_on" />
                          </span>
                          <input
                            type="text"
                            className="w-full pl-10 bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-md py-sm"
                            placeholder="District, Province (e.g. Mumbwa, Central)"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {currentStep === 3 && (
                  <section className="space-y-md animate-fade-in">
                    <div className="border-b-2 border-secondary-fixed pb-base mb-md">
                      <h3 className="text-headline-md text-primary font-bold">License Verification</h3>
                      <p className="text-on-surface-variant">Compliance is mandatory for all GoldTrace transactions.</p>
                    </div>
                    <div className="space-y-gutter">
                      <div>
                        <label className="block font-bold text-sm text-on-surface mb-xs uppercase tracking-wider">
                          Mining/Trading License Number
                        </label>
                        <input
                          type="text"
                          className="w-full bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-md py-sm"
                          placeholder="GTZ-XXXXX-2024"
                        />
                      </div>
                      <div className="p-md bg-surface-container-low border border-dashed border-outline-variant rounded-xl flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-base text-primary shadow-sm">
                          <Icon name="upload_file" />
                        </div>
                        <p className="font-semibold text-primary">Upload Document Copies</p>
                        <p className="text-xs text-on-surface-variant mb-md">PDF or JPEG (max 5MB). Include ID copy and License.</p>
                        <button
                          type="button"
                          className="px-md py-xs bg-white border border-outline text-on-surface font-semibold rounded hover:bg-surface-container-high transition-colors"
                        >
                          Select Files
                        </button>
                      </div>
                      {role === 'miner' && (
                        <div>
                          <label className="block font-bold text-sm text-on-surface mb-xs uppercase tracking-wider">Mine Details</label>
                          <textarea
                            className="w-full bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-md py-sm"
                            placeholder="Describe the scale of operations and primary mineral output..."
                            rows={3}
                          />
                        </div>
                      )}
                    </div>
                  </section>
                )}

                {currentStep === 4 && (
                  <section className="space-y-md animate-fade-in">
                    <div className="border-b-2 border-secondary-fixed pb-base mb-md">
                      <h3 className="text-headline-md text-primary font-bold">Account Security</h3>
                      <p className="text-on-surface-variant">Set your digital credentials for accessing the ledger.</p>
                    </div>
                    <div className="space-y-gutter">
                      <div>
                        <label className="block font-bold text-sm text-on-surface mb-xs uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          className="w-full bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-md py-sm"
                          placeholder="name@company.zm"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                        <div>
                          <label className="block font-bold text-sm text-on-surface mb-xs uppercase tracking-wider">Create Password</label>
                          <input
                            type="password"
                            className="w-full bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-md py-sm"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-sm text-on-surface mb-xs uppercase tracking-wider">Confirm Password</label>
                          <input
                            type="password"
                            className="w-full bg-surface border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-md py-sm"
                          />
                        </div>
                      </div>
                      <div className="flex items-start gap-sm p-sm bg-primary/5 rounded-lg border border-primary-fixed">
                        <input type="checkbox" id="terms" className="mt-1 text-primary focus:ring-primary rounded" />
                        <label htmlFor="terms" className="text-xs text-on-surface-variant">
                          I certify that all information provided is accurate and complies with the{' '}
                          <b>Mines and Minerals Development Act of Zambia</b>. I understand that fraudulent declarations may lead to
                          license revocation and legal action.
                        </label>
                      </div>
                    </div>
                  </section>
                )}

                <div className="flex justify-between items-center pt-lg border-t border-outline-variant">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-lg py-3 text-primary font-bold hover:bg-surface-container transition-colors rounded-full flex items-center gap-xs"
                    >
                      <Icon name="arrow_back" className="text-sm" />
                      Previous
                    </button>
                  ) : (
                    <div />
                  )}
                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-lg py-3 bg-primary text-on-primary font-bold hover:bg-primary-container transition-all rounded-full flex items-center gap-xs"
                    >
                      Next
                      <Icon name="arrow_forward" className="text-sm" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-lg py-3 bg-secondary-container text-on-secondary-container font-bold hover:scale-105 active:scale-95 transition-all rounded-full shadow-sm"
                    >
                      Complete Registration
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          <footer className="mt-lg text-center space-y-sm">
            <div className="flex justify-center items-center gap-md opacity-40 grayscale">
              <div className="w-12 h-12 bg-outline-variant rounded-full flex items-center justify-center">
                <Icon name="account_balance" className="text-xl" />
              </div>
              <div className="w-12 h-12 bg-outline-variant rounded-full flex items-center justify-center">
                <Icon name="verified_user" className="text-xl" />
              </div>
              <div className="w-12 h-12 bg-outline-variant rounded-full flex items-center justify-center">
                <Icon name="policy" className="text-xl" />
              </div>
            </div>
            <p className="text-xs text-on-surface-variant font-semibold">
              © 2024 GoldTrace Zambia. Government Authorized Traceability Provider.
            </p>
            <div className="flex justify-center gap-md text-xs text-primary font-bold">
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Mining Regulations
              </a>
            </div>
          </footer>
        </div>
      </main>
    </Layout>
  )
}
