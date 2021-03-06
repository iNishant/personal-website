import React from 'react'
import { ExternalLinkIcon } from '@heroicons/react/solid'

const HardwareItemCard = ({
  item: { image, productType, productName, buyLink },
}) => (
  <a
    href={buyLink}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white dark:bg-gray-800 p-6 shadow-xl hover:shadow-md rounded-xl h-80 flex flex-col justify-between"
  >
    <h4 className="flex flex-start flex-col text-lg">
      <span className="font-bold tracking-wide flex items-center">
        <span className="text-gray-800 dark:text-gray-200">{productName}</span>
        <ExternalLinkIcon className="h-6 ml-2 text-blue-500" />
      </span>
      <span className="text-gray-700 dark:text-gray-400">{productType}</span>
    </h4>
    <div className="flex items-center justify-center">
      {/* eslint-disable-next-line */}
      <img
        src={image}
        alt={productName}
        width="auto"
        height="auto"
        style={{ maxHeight: '150px', maxWidth: '100%' }}
      />
    </div>
    <p />
  </a>
)

export default HardwareItemCard
