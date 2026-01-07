import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 1,
    heading: "Web Development",
    desc: "I create responsive and user-friendly websites and full-stack web applications using modern technologies like React, Tailwind CSS, Next.js, Node.js, Express, and MySQL. My approach focuses on performance, scalability, and clean code architecture, ensuring seamless user experiences across all devices.",
    icon: <i className='bx bx-code text-3xl text-blue-300 m-2'></i>,
    span: "sm:col-span-2",
  },
  {
    id: 2,
    heading: "UI/UX Design",
    desc: "I build intuitive, visually appealing, user-friendly, and fully responsive interfaces that adapt seamlessly across all screen sizes. My designs prioritize usability, accessibility, and aesthetic consistency.",
    icon: <i className='bx bxl-figma text-3xl text-blue-300 m-2'></i>,
  },
  {
    id: 3,
    heading: "Consultation",
    desc: "I provide consultation services to help businesses improve their online presence, digital strategies, and overall application performance.",
    icon: <i className='bx bx-chat text-3xl text-blue-300 m-2'></i>,
  },
  {
    id: 4,
    heading: "Responsive & User Friendly",
    desc: "I build interfaces that are functional, aesthetically balanced, and fully responsive, delivering smooth and meaningful interactions across devices.",
    span: "sm:col-span-2 lg:col-span-2",
    icon: <i className='bx bxs-paint text-3xl text-blue-300 m-2'></i>,
  },
  {
    id: 5,
    heading: "DevOps & Deployment",
    desc: "I ensure smooth deployment and hosting of web applications, focusing on performance, uptime, and maintainability. I work to deliver projects that are reliable and scalable in production environments.",
    icon: <i className='bx bx-cloud-upload text-3xl text-blue-300 m-2'></i>,
  },
  {
    id: 6,
    heading: "Security & Best Practices",
    desc: "I follow modern web security standards, including proper authentication, data validation, and secure API design. My goal is to build applications that are robust, reliable, and resistant to common vulnerabilities.",
    icon: <i className='bx bxs-shield text-3xl text-blue-300 m-2'></i>,
  },
  {
    id: 7,
    heading: "Software Development",
    desc: "I develop high-quality software solutions using structured design, efficient algorithms, and best practices. From small utilities to full-stack systems, I focus on maintainable, scalable, and robust applications tailored to user needs.",
    icon: <i className='bx bx-cog text-3xl text-blue-300 m-2'></i>,
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState(null);

  const toggleService = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="bg-black p-9">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white font-bold text-2xl m-2">
          Services <span className="text-blue-300">{"{}"}</span>
        </h1>
        <h2 className="text-white text-[27px] m-2">Readability & Efficiency</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {services.map(service => (
            <motion.div
              key={service.id}
              className={`bg-[#080808] text-white rounded-xl p-6 sm:p-10 duration-300 ${service.span || ''} cursor-pointer`}
              onClick={() => toggleService(service.id)}
            >
              <h3 className="font-bold text-xl text-gray-500 mb-2 flex items-center justify-between">
                <span>{service.heading}</span> {service.icon}
              </h3>

              {/* Description toggle on mobile */}
              <AnimatePresence>
                {(activeId === service.id || window.innerWidth >= 640) && (
                  <motion.p
                    key="desc"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 text-sm mt-2"
                  >
                    {service.desc}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
