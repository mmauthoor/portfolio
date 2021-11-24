import headshot from '../assets/headshot.JPG';

export default function Profile() {
  return (
    <main>
      <h1>👋 Hey, I'm Dan.</h1>

      <img src={headshot} alt="My 'professional' headshot" />

      <p>junior software engineer</p>
      <p>film buff</p>
      <p>self-proclaimed bánh mì expert</p>
      <p>linchpin of my mediocre mixed netball team</p>
    </main>
  );
};
