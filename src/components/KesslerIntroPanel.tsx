import { ArrowLeft, Cpu, Activity, Play, BarChart2 } from "lucide-react";

interface KesslerIntroPanelProps {
  active?: boolean;
  onBack?: () => void;
  simState?: 'idle' | 'initializing' | 'countdown' | 'frozen' | 'collision_sequence' | 'impact' | 'debris_drifting';
  simMessage?: string;
  simCountdown?: number;
  onStartSim?: () => void;
}

export default function KesslerIntroPanel({
  active = false,
  onBack,
  simState = 'idle',
  simMessage = '',
  simCountdown = 5,
  onStartSim,
}: KesslerIntroPanelProps) {
  return (
    <div
      className={`fixed left-6 md:left-8 top-4 md:top-5 z-50 flex flex-col w-[250px] md:w-[280px] h-[calc(100vh-2.5rem)] select-none font-inter transition-all duration-1000 ease-out transform ${
        active ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-12 pointer-events-none"
      }`}
    >
      {/* Top Header Section */}
      <header className="flex flex-col select-none mb-6 flex-shrink-0">
        <button
          onClick={onBack}
          className="group flex items-center gap-1.5 text-purple-500 hover:text-purple-400 font-inter text-[10px] font-bold uppercase tracking-[0.2em] mb-4 outline-none border-none bg-transparent self-start cursor-pointer transition-colors duration-300"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-300" />
          Back
        </button>
        <h2 className="text-[20px] md:text-[23px] font-bold font-inter tracking-[0.25em] text-white uppercase drop-shadow-[0_0_12px_rgba(168,85,247,0.25)]">
          KESSLER SIMULATION
        </h2>
        <p className="text-[8.5px] md:text-[9.5px] font-semibold font-inter tracking-[0.2em] text-purple-400/80 uppercase mt-2">
          Orbital Collision Cascade Simulator
        </p>
      </header>

      {/* Main Cards Menu container */}
      <div className="flex-1 overflow-y-auto pr-1.5 flex flex-col gap-4 scrollbar-none pb-4">
        {/* Card 1 — KESSLER SYNDROME */}
        <div className="kessler-card flex flex-col gap-3">
          <div className="flex items-center gap-2 border-b border-purple-500/15 pb-2">
            <Cpu className="w-4 h-4 text-purple-400" />
            <span className="text-[10px] md:text-[11px] font-bold font-inter tracking-[0.12em] text-slate-200 uppercase">
              Kessler Syndrome
            </span>
          </div>
          <p className="text-[9.5px] md:text-[10.5px] text-slate-300 leading-relaxed font-inter font-normal">
            Kessler Syndrome describes a cascading chain reaction in which collisions between satellites and orbital debris generate increasingly more debris, dramatically raising the probability of future collisions. Even a single impact can threaten the long-term sustainability of Earth's orbital environment.
          </p>
        </div>

        {/* Card 2 — SIMULATION STATUS */}
        <div 
          className={`kessler-card flex flex-col gap-3 border transition-colors duration-500 ${
            simState === 'initializing' ? "border-amber-500/25 bg-amber-950/5" :
            simState === 'countdown' ? "border-rose-500/25 bg-rose-950/5" :
            simState === 'frozen' ? "border-red-500/30 bg-red-950/10" :
            simState === 'collision_sequence' || simState === 'impact' ? "border-orange-500/25 bg-orange-950/5" :
            simState === 'debris_drifting' ? "border-red-500/40 bg-red-950/15" :
            "border-emerald-500/20 bg-emerald-950/5"
          }`}
        >
          <div className="flex items-center justify-between border-b border-purple-500/15 pb-2">
            <div className="flex items-center gap-2">
              <Activity className={`w-4 h-4 transition-colors duration-500 ${
                simState === 'initializing' ? "text-amber-400" :
                simState === 'countdown' ? "text-rose-400 animate-pulse" :
                simState === 'frozen' ? "text-red-400" :
                simState === 'collision_sequence' || simState === 'impact' ? "text-orange-400 animate-pulse" :
                simState === 'debris_drifting' ? "text-red-400 animate-pulse" :
                "text-emerald-400"
              }`} />
              <span className="text-[10px] md:text-[11px] font-bold font-inter tracking-[0.12em] text-slate-200 uppercase">
                Simulation Status
              </span>
            </div>

            {/* Dynamic Status Badge */}
            {simState === 'idle' && (
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] md:text-[10px] font-bold text-emerald-400 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                READY
              </span>
            )}
            {simState === 'initializing' && (
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[9px] md:text-[10px] font-bold text-amber-400 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                INITIALIZING
              </span>
            )}
            {simState === 'countdown' && (
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-[9px] md:text-[10px] font-bold text-rose-400 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
                ACTIVE
              </span>
            )}
            {simState === 'frozen' && (
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/15 border border-red-500/30 text-[9px] md:text-[10px] font-bold text-red-400 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                HALTED
              </span>
            )}
            {(simState === 'collision_sequence' || simState === 'impact') && (
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[9px] md:text-[10px] font-bold text-orange-400 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                COLLIDING
              </span>
            )}
            {simState === 'debris_drifting' && (
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/15 border border-red-500/35 text-[9px] md:text-[10px] font-bold text-red-400 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                COLLISION DETECTED
              </span>
            )}
          </div>

          {/* Dynamic Status Text */}
          <div className="text-[9.5px] md:text-[10.5px] text-slate-300 leading-relaxed font-inter font-normal min-h-[64px]">
            {simState === 'idle' && (
              <p>
                The orbital environment is currently stable.
                <br />
                Twenty satellites are being actively monitored.
                <br />
                No collision events have been detected.
                <br />
                <br />
                Press Start Simulation to initiate the collision cascade scenario.
              </p>
            )}
            {simState === 'initializing' && (
              <p key={simMessage} className="animate-pulse text-amber-300/90 font-medium">
                {simMessage}
              </p>
            )}
            {simState === 'countdown' && (
              <p>
                Simulation initialized.
                <br />
                Potential orbital intersection detected.
                <br />
                Monitoring imminent collision pair...
              </p>
            )}
            {simState === 'frozen' && (
              <p className="text-red-300/90 font-medium">
                Simulation paused.
                <br />
                Imminent collision event locked.
                <br />
                Awaiting impact trigger.
              </p>
            )}
            {(simState === 'collision_sequence' || simState === 'impact') && (
              <p className="text-orange-300/90 font-medium">
                Potential orbital intersection locked.
                <br />
                Collision course imminent.
                <br />
                Approaching impact coordinate...
              </p>
            )}
            {simState === 'debris_drifting' && (
              <p className="text-red-300/90 font-medium">
                Initial orbital collision confirmed.
                <br />
                A debris cloud has been generated.
                <br />
                Monitoring the surrounding orbital environment for potential secondary impacts.
              </p>
            )}
          </div>
        </div>

        {/* Card 3 — ENVIRONMENT SNAPSHOT */}
        <div className="kessler-card flex flex-col gap-3">
          <div className="flex items-center gap-2 border-b border-purple-500/15 pb-2">
            <BarChart2 className="w-4 h-4 text-purple-400" />
            <span className="text-[10px] md:text-[11px] font-bold font-inter tracking-[0.12em] text-slate-200 uppercase">
              Environment Snapshot
            </span>
          </div>
          <div className="flex flex-col gap-3 text-[10px] md:text-[11px] font-inter">
            <div className="flex justify-between items-center py-0.5 border-b border-purple-500/5">
              <span className="text-slate-400 font-normal">Active Satellites</span>
              <span className="text-slate-100 font-bold text-[13px] md:text-[14px] transition-all duration-300">
                {simState === 'debris_drifting' ? '18' : '20'}
              </span>
            </div>
            <div className="flex justify-between items-center py-0.5 border-b border-purple-500/5">
              <span className="text-slate-400 font-normal">Debris Objects</span>
              <span className="text-slate-100 font-bold text-[13px] md:text-[14px] transition-all duration-300">
                {simState === 'debris_drifting' ? '45' : '0'}
              </span>
            </div>
            <div className="flex justify-between items-center py-0.5 border-b border-purple-500/5">
              <span className="text-slate-400 font-normal">Predicted Collisions</span>
              <span className="text-slate-100 font-bold text-[13px] md:text-[14px] transition-all duration-300">
                {simState === 'debris_drifting' ? 'Monitoring' :
                 simState === 'idle' || simState === 'initializing' ? '0' : '1'}
              </span>
            </div>
            <div className="flex justify-between items-center py-0.5">
              <span className="text-slate-400 font-normal">Simulation State</span>
              <span className={`font-bold uppercase tracking-wider text-[9px] md:text-[10px] transition-colors duration-500 ${
                simState === 'initializing' ? "text-amber-400" :
                simState === 'countdown' ? "text-rose-400" :
                simState === 'frozen' ? "text-red-400" :
                simState === 'collision_sequence' || simState === 'impact' ? "text-orange-400 animate-pulse" :
                simState === 'debris_drifting' ? "text-red-400 animate-pulse" :
                "text-purple-400"
              }`}>
                {simState === 'idle' && 'Standby'}
                {simState === 'initializing' && 'Initializing'}
                {simState === 'countdown' && 'Countdown'}
                {simState === 'frozen' && 'LOCKED'}
                {simState === 'collision_sequence' && 'Intercepting'}
                {simState === 'impact' && 'Impact'}
                {simState === 'debris_drifting' && 'Collision Detected'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Start Simulation Button */}
      <div className="mt-auto pt-4 flex-shrink-0">
        <button
          onClick={simState === 'idle' ? onStartSim : undefined}
          disabled={simState !== 'idle'}
          className={`w-full relative group overflow-hidden rounded-xl border px-4 py-3 md:py-3.5 text-center font-inter text-xs md:text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
            simState === 'idle'
              ? "border-purple-500/30 bg-gradient-to-r from-purple-950/20 via-fuchsia-950/20 to-rose-950/20 text-white shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] active:scale-[0.98] active:opacity-90 cursor-pointer"
              : simState === 'debris_drifting'
              ? "border-red-500/10 bg-red-950/20 text-red-500 opacity-60 cursor-not-allowed"
              : "border-slate-500/10 bg-slate-950/20 text-slate-500 opacity-60 cursor-not-allowed"
          }`}
        >
          {/* Subtle background glow on hover */}
          {simState === 'idle' && (
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          )}
          <span className="relative z-10 flex items-center justify-center gap-2">
            {simState === 'idle' && (
              <>
                <Play className="w-3.5 h-3.5 text-purple-400 fill-purple-400/30" />
                <span>Start Simulation</span>
              </>
            )}
            {simState === 'initializing' && (
              <>
                <span className="w-2.5 h-2.5 border-2 border-slate-500 border-t-transparent rounded-full animate-spin" />
                <span>Initializing Simulation...</span>
              </>
            )}
            {simState === 'countdown' && (
              <>
                <Activity className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                <span>Simulation Running</span>
              </>
            )}
            {simState === 'frozen' && (
              <>
                <Activity className="w-3.5 h-3.5 text-red-500" />
                <span>Simulation Halted</span>
              </>
            )}
            {(simState === 'collision_sequence' || simState === 'impact') && (
              <>
                <Activity className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
                <span>Intercepting...</span>
              </>
            )}
            {simState === 'debris_drifting' && (
              <>
                <Activity className="w-3.5 h-3.5 text-red-500" />
                <span>Collision Detected</span>
              </>
            )}
          </span>
        </button>
      </div>
    </div>
  );
}
