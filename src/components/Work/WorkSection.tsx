import React from 'react'
import './work.css'
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'
import ScrollStack, { ScrollStackItem } from './ScrollStack'

type Project = {
  title: string
  description: string
  detailedDescription?: string
  poster?: string
  theme: 'a' | 'b' | 'c' | 'd' | 'e'
  link?: string
}

const projects: Project[] = [
  {
    title: 'Medi',
    description: 'Medical chatbot & document management system',
    detailedDescription: 'Medi is a comprehensive medical chatbot and document management backend system supported by Azure cloud infrastructure. The codebase includes API services, intelligent agents for medical question answering, document uploads, and integration with cloud storage/databases.',
    poster: '/1.health_care.png',
    theme: 'a',
    link: 'https://github.com/eark749/Medi',
  },
  {
    title: 'SmartAssist',
    description: 'AI-Powered Document Assistant with RAG',
    detailedDescription: 'A production-ready RAG (Retrieval-Augmented Generation) system built on AWS, leveraging Amazon Bedrock, OpenSearch, and FastAPI to provide intelligent document-based Q&A capabilities.',
    poster: '/2.smart_assit.png',
    theme: 'b',
    link: 'https://raw.githubusercontent.com/eark749/smartassist-backend/37e32e4e5c3f9d4399fa61c8f8272efc5ced8769/smartassist-architecture.svg',
  },
  {
    title: 'HR AI',
    description: 'AI-Powered HR Management System',
    detailedDescription: 'HR AI is a modern, full-stack HR Management System that combines traditional REST API functionality with an intelligent AI chatbot assistant. Built with FastAPI and React, it provides employees with an intuitive interface to manage leaves, overtime, attendance corrections, payslips.',
    poster: '/3.hrai.png',
    theme: 'c',
    link: 'https://github.com/eark749/HR_AI',
  },
  {
    title: 'Text Generation using RNN',
    description: "A simple RNN model trained on shakespeares text to generate text like him",
    detailedDescription: 'A character-level Recurrent Neural Network (RNN) implementation trained on Shakespeare\'s complete works to generate text in his literary style. The model learns patterns, vocabulary, and sentence structures from the original texts to produce creative, Shakespeare-inspired content using deep learning sequence modeling.',
    poster: '/5.rnn.png',
    theme: 'd',
    link: 'https://github.com/eark749/RNN/blob/main/RNN(recurrent%20nueral%20network).py',
  },
  {
    title: 'The-Orchestrator',
    description: 'MCP Market-place for AI agents',
    detailedDescription: 'A comprehensive marketplace platform for AI agents built on the Model Context Protocol (MCP). The Orchestrator enables seamless discovery, integration, and orchestration of specialized AI agents, allowing developers to compose complex AI workflows by connecting multiple agents with standardized interfaces and communication protocols.',
    poster: '/4.mcp.png',
    theme: 'e',
    link: 'https://github.com/eark749/The-Orchestrator',
  },
]

export default function WorkSection() {
  return (
    <section id="work" className="section work-root" aria-label="Work">
      <ScrollAnimation>
        <h2>Work</h2>
      </ScrollAnimation>

      <ScrollStack 
        className="work-grid" 
        useWindowScroll={true} 
        itemDistance={24} 
        itemStackDistance={30} 
        baseScale={0.85} 
        itemScale={0.03} 
        stackPosition="10%" 
        scaleEndPosition="5%"
      >
        {projects.map((p, idx) => (
          <ScrollStackItem key={idx}>
            <ScrollAnimation delay={idx * 100}>
              <article
                className={`work-card theme-${p.theme}`}
                aria-label={p.title}
                style={{ zIndex: idx + 1 }}
              >
                {p.link && (
                  <a 
                    href={p.link} 
                    className="project-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View ${p.title} project`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </a>
                )}
                <div className="work-media" aria-hidden={!p.poster}>
                  {p.poster && (
                    <img
                      className="work-image"
                      src={p.poster}
                      alt={`${p.title} project thumbnail`}
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="work-meta">
                  <h3>{p.title}</h3>
                  <p className="work-description-short">{p.description}</p>
                  {p.detailedDescription && (
                    <p className="work-description-detailed">{p.detailedDescription}</p>
                  )}
                </div>
              </article>
            </ScrollAnimation>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  )
}


