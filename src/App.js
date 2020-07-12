import React, { useState } from 'react';
import './App.css';
//import Person from './Person';


const App= () => {
	const [content, setContent] = React.useState(<AboutMe />)

	const handleContent = (e) => {
		let val = e.target.innerHTML
		if (val === 'About me') setContent(<AboutMe />)
		else if (val === 'Education') setContent(<Education />)
		else if (val === 'Experience') setContent(<Experience />)
		else if (val === 'Skills') setContent(<Skills />)
		else if (val === 'Contact') setContent(<ContactDetails />)
  };
  
	return (
		<div>
					<div className="Display">
						<ul>
								<button onClick={handleContent}>About me</button>
								<button onClick={handleContent}>Education</button>
								<button onClick={handleContent}>Experience</button>
								<button onClick={handleContent}>Skills</button>
								<button onClick={handleContent}>Contact</button>
						</ul>
					</div>
			<Content>{content}</Content>
		</div>
	)
}

const Content = (props) => <div>{props.children}</div>

const AboutMe = () => (
	<div>
		<h1>Hello, I am Shubha Rashmi</h1>
		<p>I passed out from Silicon Institute of Technology in the Year 2017</p>
		<p>Currently Learning Full Stack Web Development from Guvi and working as Software Engieer in Tech Mahindra Ltd.</p>
	</div>
)

const Experience = () => {
	const Details = [
		{
			designation: 'Software Engieer',
			company: 'Tech Mahindra Ltd.',
			location: 'Pune',
      Experience : `2.3 Years`
		}
		
	]
	return (
		<div>
			<GenerateInternDetails details={Details[0]} />
		</div>
	)
}

const GenerateInternDetails = (props) => {
	return (
		<div>
			<ul>
				Working as {props.details.designation}
				at {props.details.company}
				located at {props.details.location}
				with Experience of {props.details.Experience}
			</ul>
		</div>
	)
}

const Skills = () => {
	const SkillDetails = [
		'C++',
		'SQL',
		'Data Structures',
		'HTML',
		'CSS',
		'JavaScript',
	]
	return (
		<div>
			<GenerateSkillDetails skill={SkillDetails[0]} />
			<GenerateSkillDetails skill={SkillDetails[1]} />
			<GenerateSkillDetails skill={SkillDetails[2]} />
			<GenerateSkillDetails skill={SkillDetails[3]} />
			<GenerateSkillDetails skill={SkillDetails[4]} />
			<GenerateSkillDetails skill={SkillDetails[5]} />
		</div>
	)
}

const GenerateSkillDetails = (props) => <div>{props.skill}</div>

const ContactDetails = () => (
	<div>
		<ul>
			<li>shubharashmi101@gmail.com</li>
			<li>7978850234</li>
			<li>Pune, India</li>
		</ul>
	</div>
)

const Education = () => {
	const EducationDetails = [
		{
			title: 'Bachelor of Technology',
			institute: 'Silicon Institute of Technology',
			year: '2013-2017',
		},
		{
			title: 'Class XII',
			institute: 'D.A.V Public School',
			year: '2012',
		},
		{
			title: 'Class X',
			institute: 'D.A.V Public School',
			year: '2010',
		},
	]
	return (
		<div>
			<GenerateEducation education={EducationDetails[0]} />
			<GenerateEducation education={EducationDetails[1]} />
			<GenerateEducation education={EducationDetails[2]} />
		</div>
	)
}

const GenerateEducation = (props) => (
	<div>
		<ul>
			<li>{props.education.title}</li>
			<li>{props.education.institute}</li>
			<li>{props.education.year}</li>
		</ul>
	</div>
)

export default App;
