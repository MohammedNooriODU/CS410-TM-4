export default function Glossary() {
  return (
    <div className="hero bg-base-300 min-h-screen bg-transparent">
      <div className="hero-content text-left bg-white border-purple-500 animated-gradient rounded-3xl p-16 border-4">
        <div className="max-w-md text-black">
          <h1 className="text-5xl font-bold">Glossary</h1>
          <p className="pt-6 py-2 text-lg text-black">
            <span className="text-black text-xl font-bold">Next.js</span>:
            A React framework that simplifies the process of building fast and scalable web apps.
          </p>
          <p className="py-2 text-lg text-black">
            <span className="text-black text-xl font-bold">HTML</span>: 
            A markup language used to create and structure content on web pages.
          </p>
          <p className="py-2 text-lg text-black">
            <span className="text-black text-xl font-bold">CSS</span>: 
            A stylesheet language used to control the layout, presentation, and visual-styling of web pages. Works in conjunction with HTML to enhance appearance of web content.
          </p>
          <p className="py-2 text-lg text-black">
            <span className="text-black text-xl font-bold">IDE</span>: 
            A software application that provides developers a space with proper tools and features to write, debug, and manage code. The central hub for software development. 
          </p>
          <p className="py-2 text-lg text-black">
            <span className="text-black text-xl font-bold">MongoDB</span>:
            A non-relation NoSql database. Data is stored in flexible document-oriented format versus relational databases table format. Designed to handle large volumes of unscructured or semi-structured data.
          </p>
          <p className="py-2 text-lg text-black">
            <span className="text-black text-xl font-bold">API</span>: 
            A set of protocols, routines, and tools that allow different software applications or systems to communicate with eachother. Defines methods and data formats that applications can use to request and exchange information. Essentially allows developers to interact with the functionality or data provided by another service/system.  
          </p>
        </div>
      </div>
    </div>
  );
}
