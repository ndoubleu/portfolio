import React from "react";
import Image, { StaticImageData } from "next/image";
import VoxelDogLoader from './voxel-dog-loader'
import dynamic from 'next/dynamic'
const LazyVoxelDog = dynamic(() => import('./voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Frontend development"
                        icon="/icons/design.svg"
                        description="I can mix my design skills and codes perfectly"
                        projects={8} />
                    <AboutCard
                        title="Backend development"
                        icon="/icons/code.svg"
                        description="I have created the core of several projects."
                        projects={14} />
                    <AboutCard
                        title="Mobile"
                        icon="/icons/phone.svg"
                        description="I develop cross-platform mobile applications with Flutter."
                        projects={7} />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Introduce</h5>
                    <h1 className="white">Hello, I&#39;m Ulugbek Akhmedov</h1>
                    <h3 className="white">TeamLead and Full-Stack Senior developer</h3>
                    <p className="gray">I have proceeded my dream to be a developer as it has been my lifelong ambition and gained several Certifications of competetions. I am a talented Full-Stack developer with a UI/UX design background. During my more than 4 years of work as a Full-Stack developer and Teamlead, I had the opportunity to enhance my expertise at Fintech and local services.<br/><br/>
                    I am naturally persevered, self-confident, quietly curios, innovative and constantly challenging my skills.</p>
                </div>
            </div>

            <div className="container three-dog">
                <LazyVoxelDog />
            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}