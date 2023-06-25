import Link from "next/Link";

const developers = [
  { id: 1, name: "Yash" },
  { id: 2, name: "Vaibhav" },
  { id: 3, name: "Suresh" },
];

const AboutUs = () => {
  return (
    <>
      <h1>Developers Names</h1>
      <ul>
        {developers.map((developer) => (
          <li key={developer.id}>
            <Link href={`/aboutUs/${developer.id}`}>
              <h2>{developer.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AboutUs;
