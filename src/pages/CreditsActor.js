import React from 'react'
import ActorCredits, { Actorinfo } from '../components/ActorCredits'

export default function CreditsActor() {
    return (
        <section className='bg-gray-900 dark:bg-gray-300'>
            <div>
                <Actorinfo />
            </div>
            <div>
                <ActorCredits/>
            </div>
        </section>
    )
}
