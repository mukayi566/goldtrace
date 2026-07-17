import { Layout } from '../components/Layout'
import { Link } from 'react-router-dom'
import { Icon } from '../components/ui'
import { IMAGES } from '../constants/images'

export function VerificationPage() {
  return (
    <Layout showBottomNav showFooter activeNav="/verification">
      <main className="w-full max-w-5xl px-margin-mobile md:px-margin-desktop py-lg flex flex-col items-center mx-auto flex-grow">
        <div className="no-print w-full flex flex-col md:flex-row justify-between items-end md:items-center mb-md gap-sm">
          <div className="text-left w-full">
            <nav className="flex items-center gap-xs text-on-surface-variant mb-xs">
              <Icon name="history_edu" className="text-[18px]" />
              <span className="text-label-md">Ledger</span>
              <Icon name="chevron_right" className="text-[18px]" />
              <span className="text-label-md">Verified Assets</span>
            </nav>
            <h1 className="text-headline-md text-primary">Gold Batch Verification</h1>
          </div>
          <div className="flex gap-sm">
            <button type="button" onClick={() => window.print()} className="flex items-center gap-xs border-2 border-primary text-primary px-md py-sm rounded-lg text-label-md hover:bg-surface-container-low transition-all">
              <Icon name="print" /> Print
            </button>
            <button type="button" className="flex items-center gap-xs bg-primary text-white px-md py-sm rounded-lg text-label-md hover:shadow-md transition-all">
              <Icon name="download" /> Download PDF
            </button>
          </div>
        </div>

        <div className="certificate-container w-full bg-white border border-outline-variant shadow-sm rounded-xl overflow-hidden relative certificate-watermark p-base md:p-lg">
          <div className="absolute top-0 left-0 w-full h-2 bg-secondary-container" />
          <div className="absolute top-0 right-0 w-48 h-48 guilloche-pattern opacity-10 pointer-events-none rounded-bl-full" />

          <div className="flex flex-col md:flex-row justify-between items-start mb-lg border-b border-outline-variant pb-md relative z-10">
            <div className="flex items-center gap-md mb-base md:mb-0">
              <img alt="Logo" className="h-20 w-20 object-contain" src={IMAGES.logo} />
              <div>
                <h2 className="text-primary leading-tight text-display-lg font-bold">OFFICIAL VERIFICATION</h2>
                <p className="text-label-md text-secondary uppercase tracking-widest">Republic of Zambia · Mining Authority</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="bg-secondary-container text-on-secondary-container px-md py-xs rounded-full text-label-md flex items-center gap-xs mb-xs">
                <Icon name="verified_user" filled /> CERTIFIED AUTHENTIC
              </div>
              <p className="text-on-surface-variant text-[12px] font-mono">CERT ID: ZM-GT-2024-8849-AF</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-md relative z-10">
            <div className="md:col-span-8 space-y-md">
              <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-lg">
                <h3 className="text-label-md text-on-surface-variant border-b border-outline-variant pb-xs mb-md flex justify-between">
                  <span>ASSET SPECIFICATIONS</span>
                  <span className="font-mono">VERIFIED: NOV 14, 2024</span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-md">
                  <div>
                    <label className="block text-[11px] font-bold text-outline uppercase">Weight (Pure)</label>
                    <p className="text-headline-sm text-primary">500.00 <span className="text-body-md font-normal">grams</span></p>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-outline uppercase">Purity Rating</label>
                    <p className="text-headline-sm text-primary">99.9% <span className="text-body-md font-normal">Au</span></p>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-outline uppercase">Date Mined</label>
                    <p className="text-headline-sm text-primary">Oct 12, 2024</p>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-outline uppercase">Market Value</label>
                    <p className="text-headline-sm text-primary">$0.00 <span className="text-body-md font-normal text-on-surface-variant">USD</span></p>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-outline uppercase">Verification Status</label>
                    <p className="text-headline-sm text-secondary font-bold">Verified ✓</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-lg">
                  <h3 className="text-label-md text-on-surface-variant border-b border-outline-variant pb-xs mb-sm">ORIGIN SOURCE</h3>
                  <div className="flex items-start gap-sm">
                    <div className="bg-primary-container text-white p-xs rounded-lg">
                      <Icon name="location_on" />
                    </div>
                    <div>
                      <p className="text-label-md text-primary">Chumbwe Gold Mine</p>
                      <p className="text-body-md text-on-surface-variant">Central Province, Zambia</p>
                      <div className="mt-sm flex items-center gap-xs text-[12px] text-primary font-mono bg-primary-fixed/30 px-xs py-[2px] rounded">
                        <Icon name="location_on" className="text-[14px]" /> -15.3129, 28.5204
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-lg">
                  <h3 className="text-label-md text-on-surface-variant border-b border-outline-variant pb-xs mb-sm">REGISTERED MINER</h3>
                  <div className="flex items-center gap-sm">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high">
                      <img className="w-full h-full object-cover" src={IMAGES.certMiner} alt="Registered miner" />
                    </div>
                    <div>
                      <p className="text-label-md text-primary">Mwamba K. Kapambwe</p>
                      <p className="text-body-md text-on-surface-variant">ID: ZM-MIN-44201</p>
                      <span className="text-[10px] bg-secondary-container/50 text-secondary px-xs py-[2px] rounded font-bold uppercase">Authorized Seller</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white p-md rounded-lg flex flex-col md:flex-row items-center gap-md">
                <Icon name="shield_lock" className="text-[48px] text-secondary-fixed flex-shrink-0" />
                <div>
                  <p className="text-label-md mb-xs">BLOCKCHAIN VERIFICATION</p>
                  <p className="text-body-md text-primary-fixed leading-snug">
                    This asset is cryptographically anchored to the Zambian National Gold Ledger. Any modification triggers an immediate audit alert.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-md">
              <div className="bg-white border-2 border-dashed border-outline-variant p-md rounded-lg flex flex-col items-center justify-center text-center">
                <div className="w-full aspect-square bg-white border border-outline-variant p-base rounded-lg mb-sm">
                  <img className="w-full h-full object-contain" src={IMAGES.qrCode} alt="QR code for buyer verification" />
                </div>
                <p className="text-label-md text-primary">SCAN TO VERIFY</p>
                <p className="text-[11px] text-on-surface-variant">Buyers scan to confirm authenticity</p>
              </div>

              <div className="flex flex-col items-center justify-center p-md border border-outline-variant rounded-lg bg-surface-container-low overflow-hidden relative">
                <div className="absolute -bottom-2 -right-2 opacity-5">
                  <Icon name="policy" filled className="text-[100px]" />
                </div>
                <div className="relative w-24 h-24 mb-sm">
                  <div className="absolute inset-0 bg-secondary rounded-full animate-pulse opacity-10" />
                  <div className="flex items-center justify-center h-full">
                    <Icon name="verified" filled className="text-[64px] text-secondary" />
                  </div>
                </div>
                <p className="text-label-md text-primary uppercase text-center">Tamper-Proof<br />Digital Signature</p>
                <p className="text-[10px] text-on-surface-variant font-mono mt-xs">SIG: 0x9823...BA31</p>
              </div>

              <div className="flex flex-col h-40 border border-outline-variant rounded-lg overflow-hidden grayscale contrast-125">
                <img className="w-full h-full object-cover" src={IMAGES.certMap} alt="Mining location map" />
                <div className="bg-primary/90 text-white text-[10px] py-1 text-center font-bold">SOURCE GPS COORDINATES</div>
              </div>
            </div>
          </div>

          <div className="mt-lg pt-md border-t border-outline-variant grid grid-cols-1 md:grid-cols-2 gap-md items-end">
            <div className="space-y-base">
              <p className="text-[12px] text-on-surface-variant max-w-sm italic">
                The integrity of this certificate is guaranteed by GoldTrace in accordance with the National Mining Act.
              </p>
              <div className="flex gap-md">
                <div className="border-b border-on-surface w-32 h-10 flex items-center justify-center font-mono text-[12px]">SIGNATURE_OFFICIAL</div>
                <div className="border-b border-on-surface w-32 h-10 flex items-center justify-center font-mono text-[12px]">TREASURY_SEAL</div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-label-md text-primary">GoldTrace</p>
              <p className="text-body-md text-on-surface-variant">Headquarters: Lusaka, Plot 4492</p>
              <p className="text-[11px] text-outline mt-sm">Generated on: 2024-11-14 14:22:11 CAT</p>
            </div>
          </div>
        </div>

        <div className="no-print mt-md w-full bg-secondary-container/20 border border-secondary/30 rounded-xl p-md flex items-center gap-md">
          <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white shrink-0">
            <Icon name="info" />
          </div>
          <div>
            <p className="text-label-md text-secondary">Asset Status: Circulating</p>
            <p className="text-body-md text-on-surface-variant">
              This gold is held in the <strong>Lusaka Central Vault</strong>. Transfer ownership via the{' '}
              <Link to="/trade-center" className="text-primary underline">Trade Center</Link>.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
