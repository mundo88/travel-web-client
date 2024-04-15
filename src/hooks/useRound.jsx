import React from 'react';


export default function useRound() {
    const round = (n,p=1)=>(e=>((n*e)+.5|0)/e)(10**p)
    return round
}
