import ParticleText from './ParticleText';
import './buttons.css';

const StarkButton = ({ alt }) => (
  <button alt={alt}>
    <i>t</i>
    <i>o</i>
    <i>n</i>
    <i>y</i>
    <i>&nbsp;</i>
    <i>s</i>
    <i>t</i>
    <i>a</i>
    <i>r</i>
    <i>k</i>
  </button>
);

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: 40,
        margin: 0,
        background: '#111'
      }}
    >
      <div style={{ width: '100%', height: 360, background: '#09090f' }}>
        <ParticleText
          text="Future Interfaces"
          particleSize={2.2}
          density={4}
          color="#f8fafc"
          highlightColor="#8b5cf6"
          scatter={190}
          gatherDuration={1600}
          stagger={420}
          pointerRepel={42}
          repelRadius={120}
          idleDrift={0.8}
          trigger="mount"
          fontSize="clamp(3.5rem, 13vw, 9rem)"
          fontWeight={800}
          fontFamily="inherit"
          glow
        />
      </div>

      <div className="button-row">
        <StarkButton alt="START HERE" />
        <StarkButton alt="STARK HERE" />
      </div>
    </div>
  );
}

export default App;
