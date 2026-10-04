// apps/extension/src/App.tsx
import { Show, UserButton } from '@clerk/chrome-extension';

function App() {
  return (
    <div style={{ width: 300, padding: 16 }}>
      <Show when="signed-in">
        <UserButton />
        <p>You're signed in — clip away.</p>
        {/* clip-saving UI goes here later */}
      </Show>

      <Show when="signed-out">
        <p>Sign in on the Clippy dashboard first.</p>
        <br />
        <div className='flex align-text'></div>
        <a href="http://localhost:3000/sign-in" target="_blank" rel="noreferrer">
          Open dashboard
        </a>
      </Show>
    </div>
  );
}

export default App;
