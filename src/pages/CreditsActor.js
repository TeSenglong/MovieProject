import React from 'react'
import ActorCredits, { Actorinfo } from '../components/ActorCredits'

export default function CreditsActor() {
    return (
        <main className='bg-gray-900 dark:bg-gray-300 pb-10'>
            <section>
                <Actorinfo />
            </section>
            <section className='pt-10'>
                <p className='w-11/12 text-center m-auto text-3xl text-secondary dark:text-gray-900'> Actor Credits </p>
                <ActorCredits/>
            </section>
        </main>
    )
}
