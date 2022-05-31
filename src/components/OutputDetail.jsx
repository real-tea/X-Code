import React from 'react'

function OutputDetail({output}) {
  return (
    <div className = "metrics-container mt-4 flex flex-col space-y-3">
        <p className ="text-sm">
            Status:{" "}
            <span className = "font-semibold px-2 py-1 rounded-md bg-orange-400">
                {output?.status.description}
            </span>
        </p>
        <p className="text-sm">
            Memory:
            <span className="font-semibold px-2 py-1 rounded-md bg-orange-400">
                {output?.memory}
            </span>
        </p>

        <p className ="text-sm">
            Time:{" "}
            <span className ="font-semibold px-2 py-1 rounded-md bg-orange-400">
                {output?.time}
            </span>
        </p>

    </div>
  )
}

export default OutputDetail;