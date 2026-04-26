import { BoltIcon, NeuralIcon, CheckCircleIcon } from '../icons'

export function RightPanel() {
  return (
    <article
      className="relative min-h-[560px] rounded-[34px] overflow-hidden max-[1180px]:min-h-0"
      style={{
        border: '1px solid rgba(148,78,255,0.38)',
        background:
          'radial-gradient(circle at 84% 6%, rgba(189,75,255,0.3) 0%, transparent 38%), linear-gradient(180deg, rgba(22,9,42,0.99), rgba(11,4,22,0.99))',
        boxShadow:
          'inset 0 1px 0 rgba(200,150,255,0.07), 3px 0 28px rgba(140,50,255,0.2), 0 20px 48px rgba(0,0,0,0.44)',
      }}
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none blur-[14px] right-[-60px] top-[-60px] w-[460px] h-[340px]"
        style={{
          background:
            'radial-gradient(circle at 60% 40%, rgba(195,86,255,0.6) 0%, rgba(120,36,230,0.34) 40%, transparent 74%)',
        }}
      />

      {/* Inner content */}
      <div className="relative z-1 py-[28px] px-[38px] max-[720px]:p-[22px_18px] max-[720px]:pb-7">
        {/* Inference card */}
        <div
          className="relative p-[26px_26px_28px] rounded-[28px]"
          style={{
            border: '1px solid rgba(180,140,255,0.16)',
            background:
              'linear-gradient(180deg, rgba(10,7,18,0.97), rgba(14,8,26,0.99))',
            boxShadow:
              'inset 0 1px 0 rgba(220,190,255,0.06), 0 12px 32px rgba(0,0,0,0.42)',
          }}
        >
          {/* Decorative rails */}
          <div
            className="absolute top-1/2 w-[72px] h-[230px] -translate-y-1/2 rounded-[24px] left-[-90px] max-[1180px]:hidden"
            style={{ border: '1px solid rgba(215,188,255,0.12)' }}
          />
          <div
            className="absolute top-1/2 w-[72px] h-[230px] -translate-y-1/2 rounded-[24px] right-[-90px] max-[1180px]:hidden"
            style={{ border: '1px solid rgba(215,188,255,0.12)' }}
          />

          {/* Inference head */}
          <div className="flex items-center justify-between gap-[18px] max-[720px]:flex-col max-[720px]:items-start">
            <div className="flex items-center">
              {/* Neural icon avatar */}
              <div
                className="inline-flex items-center justify-center overflow-hidden rounded-full w-11 h-11 p-[2px] shrink-0 text-[#c084fc]"
                style={{
                  border: '1px solid rgba(200,115,255,0.55)',
                  background:
                    'radial-gradient(circle at 40% 35%, rgba(210,150,255,0.18), rgba(130,40,230,0.28) 60%, rgba(10,4,22,0.96))',
                  boxShadow: '0 0 18px rgba(170,66,255,0.28)',
                }}
              >
                <NeuralIcon />
              </div>
              <div className="ml-3">
                <div className="text-[rgba(194,179,208,0.74)] text-[0.74rem] tracking-[-0.02em]">
                  Neural Engine
                </div>
                <div className="mt-0.5 text-[#f4f0f7] text-[0.98rem] font-medium tracking-[-0.04em]">
                  Inference: Cloud Latency
                </div>
              </div>
            </div>

            <div className="text-left">
              <div className="flex items-center gap-2 text-[rgba(230,222,239,0.88)] text-[0.72rem] tracking-[-0.02em]">
                <span
                  className="w-3 h-3 rounded-full bg-[#9030ff] shrink-0"
                  style={{
                    border: '1px solid rgba(180,90,255,0.88)',
                    boxShadow:
                      '0 0 0 4px rgba(150,49,246,0.28), 0 0 18px rgba(150,49,246,0.52)',
                  }}
                />
                <span>Active Inference</span>
              </div>
              <div className="mt-[5px] text-[rgba(187,178,194,0.74)] text-[0.78rem] tracking-[-0.03em]">
                Running 6 min ago
              </div>
            </div>
          </div>

          {/* Data row */}
          <div className="flex justify-between mt-[22px] text-[rgba(228,221,236,0.84)] text-[0.92rem] tracking-[-0.03em] max-[720px]:flex-col max-[720px]:items-start">
            <span>Data logging</span>
            <span className="text-[rgba(187,178,194,0.74)] text-[0.82rem]">
              Last sync 3s ago
            </span>
          </div>

          {/* Prompt card */}
          <div
            className="flex items-center justify-between gap-[18px] mt-4 p-[14px_16px_14px_14px] rounded-[18px]"
            style={{
              border: '1px solid rgba(220,160,255,0.28)',
              background:
                'radial-gradient(ellipse at 100% 50%, rgba(210,100,255,0.9) 0%, rgba(175,60,255,0.82) 18%, rgba(118,22,210,0.6) 44%, rgba(10,5,18,0.94) 80%), linear-gradient(90deg, rgba(28,10,44,0.96), rgba(100,24,168,0.92))',
              boxShadow:
                'inset 0 1px 0 rgba(255,255,255,0.16), 0 0 30px rgba(170,60,255,0.32)',
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-[12px] shrink-0"
                style={{
                  border: '1px solid rgba(255,255,255,0.18)',
                  background:
                    'linear-gradient(180deg, rgba(250,183,255,0.24), rgba(113,23,202,0.34))',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
                }}
              >
                <BoltIcon />
              </div>
              <div>
                <div className="text-[rgba(250,245,255,0.98)] text-[0.92rem] font-medium tracking-[-0.04em]">
                  Analyzing Node Clusters...
                </div>
                <div className="text-[rgba(228,215,239,0.78)] text-[0.76rem] tracking-[-0.03em]">
                  Evaluating 847 endpoints
                </div>
              </div>
            </div>
            <div className="text-[rgba(228,215,239,0.78)] text-[0.76rem] tracking-[-0.03em]">
              1s ago
            </div>
          </div>
        </div>

        {/* Connector line */}
        <div
          className="relative w-0.5 h-[74px] mx-auto"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.8), rgba(202,144,255,0.78))',
            boxShadow: '0 0 22px rgba(206,147,255,0.32)',
          }}
          aria-hidden="true"
        >
          <span
            className="absolute left-1/2 w-2 h-2 rounded-full bg-[#09020f] -translate-x-1/2 top-[-7px]"
            style={{ border: '2px solid rgba(255,255,255,0.88)' }}
          />
          <span
            className="absolute left-1/2 w-2 h-2 rounded-full bg-[#09020f] -translate-x-1/2 bottom-[-7px]"
            style={{ border: '2px solid rgba(255,255,255,0.88)' }}
          />
        </div>

        {/* Solution card */}
        <div
          className="p-[28px_32px] rounded-[28px]"
          style={{
            border: '1px solid rgba(190,150,255,0.22)',
            background:
              'linear-gradient(160deg, rgba(98,54,178,0.96) 0%, rgba(74,30,130,0.96) 52%, rgba(46,16,82,0.98) 100%)',
            boxShadow:
              'inset 0 1px 0 rgba(255,255,255,0.16), 0 14px 34px rgba(14,5,26,0.38)',
          }}
        >
          <div className="flex justify-between gap-5 text-[rgba(243,238,248,0.96)] text-[0.94rem] tracking-[-0.03em] max-[720px]:flex-col max-[720px]:items-start">
            <span>Solution Synthesized</span>
            <span className="text-[rgba(226,217,236,0.82)] text-[0.82rem]">
              Autonomous Logic
            </span>
          </div>

          <div
            className="flex items-center justify-between gap-[18px] w-full mt-8 p-[13px_20px] rounded-[18px] max-[720px]:flex-col max-[720px]:items-start max-[720px]:mt-6"
            style={{
              border: '1px solid rgba(200,170,255,0.2)',
              background:
                'linear-gradient(180deg, rgba(118,88,168,0.52), rgba(62,40,96,0.72))',
            }}
          >
            <div className="flex items-center gap-3 text-[rgba(248,243,252,0.96)] text-[0.96rem] tracking-[-0.03em]">
              <CheckCircleIcon />
              <span>Index Optimized +12.4%</span>
            </div>
            <span className="text-[rgba(231,223,238,0.9)] text-[0.84rem] tracking-[-0.03em]">
              10:35 am
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
