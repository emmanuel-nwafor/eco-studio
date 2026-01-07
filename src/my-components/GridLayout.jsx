import React from 'react'
import { motion } from 'framer-motion'

const images = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/31353874/pexels-photo-31353874/free-photo-of-close-up-of-vintage-orange-classic-car-headlight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/30955057/pexels-photo-30955057/free-photo-of-charming-brick-street-in-historic-york-england.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/31050187/pexels-photo-31050187/free-photo-of-seagulls-on-a-pebble-beach-by-the-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/26955592/pexels-photo-26955592/free-photo-of-a-river-runs-through-a-grassy-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
]

export default function GridLayout() {
  return (
    <section className="bg-black min-h-screen py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">

        {/* First wide image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-xl overflow-hidden shadow-lg sm:col-span-2"
        >
          <img
            src={images[0].src}
            alt="img-1"
            className="w-full h-[250px] sm:h-[300px] object-cover"
          />
        </motion.div>

        {/* Tall image on the right */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={images[1].src}
            alt="img-2"
            className="w-full h-[250px] sm:h-[300px] object-cover"
          />
        </motion.div>

        {/* House image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={images[2].src}
            alt="img-3"
            className="w-full h-[250px] sm:h-[300px] object-cover"
          />
        </motion.div>

        {/* Wide landscape on bottom right */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-xl overflow-hidden shadow-lg sm:col-span-2 lg:col-span-2"
        >
          <img
            src={images[3].src}
            alt="img-4"
            className="w-full h-[250px] sm:h-[300px] object-cover"
          />
        </motion.div>

      </div>
    </section>
  )
}
