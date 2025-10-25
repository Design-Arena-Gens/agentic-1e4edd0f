'use client'

import { useState } from 'react'

export default function Home() {
  const [language, setLanguage] = useState<'hi' | 'en'>('hi')
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>
<body>
  <h1>Hello World!</h1>
  <p>Yeh mera pehla website hai!</p>
</body>
</html>`)

  const content = {
    hi: {
      title: 'वेबसाइट बनाने का तरीका',
      subtitle: 'अपनी खुद की वेबसाइट बनाना सीखें - आसान हिंदी में',
      intro: 'वेबसाइट बनाना क्या है?',
      introText: 'वेबसाइट एक डिजिटल पेज होता है जो इंटरनेट पर दिखाई देता है। इसे बनाने के लिए हम HTML, CSS और JavaScript का उपयोग करते हैं।',
      stepsTitle: 'वेबसाइट बनाने के चरण',
      steps: [
        {
          title: 'HTML सीखें',
          desc: 'HTML वेबसाइट की संरचना बनाता है। यह सबसे बुनियादी और जरूरी भाषा है जो हर वेब पेज की रीढ़ होती है।'
        },
        {
          title: 'CSS जोड़ें',
          desc: 'CSS से आप अपनी वेबसाइट को सुंदर और आकर्षक बना सकते हैं। रंग, फॉन्ट, लेआउट - सब CSS से तय होता है।'
        },
        {
          title: 'JavaScript से जीवन दें',
          desc: 'JavaScript से आपकी वेबसाइट इंटरएक्टिव बनती है। बटन, एनिमेशन और डायनामिक कंटेंट के लिए यह जरूरी है।'
        },
        {
          title: 'डोमेन और होस्टिंग',
          desc: 'अपनी वेबसाइट को इंटरनेट पर लाइव करने के लिए डोमेन नाम खरीदें और होस्टिंग सर्विस चुनें।'
        },
        {
          title: 'वेबसाइट अपलोड करें',
          desc: 'अपनी फाइलें होस्टिंग सर्वर पर अपलोड करें। Vercel, Netlify या GitHub Pages जैसी मुफ्त सेवाएं उपलब्ध हैं।'
        },
        {
          title: 'टेस्ट और लॉन्च करें',
          desc: 'सब कुछ चेक करें - लिंक, इमेज, मोबाइल view। सब सही हो तो अपनी वेबसाइट दुनिया के साथ शेयर करें!'
        }
      ],
      toolsTitle: 'जरूरी टूल्स',
      tools: [
        { name: 'VS Code', desc: 'कोड लिखने के लिए सबसे अच्छा एडिटर' },
        { name: 'Chrome DevTools', desc: 'वेबसाइट डीबग करने के लिए' },
        { name: 'GitHub', desc: 'कोड को सेव और शेयर करने के लिए' },
        { name: 'Figma', desc: 'डिजाइन बनाने के लिए' }
      ],
      demoTitle: 'लाइव डेमो - अपना HTML कोड ट्राई करें',
      runButton: 'कोड रन करें',
      resourcesTitle: 'सीखने के लिए संसाधन',
      resources: [
        'W3Schools - HTML, CSS, JavaScript सीखें',
        'YouTube - हिंदी में वेब डेवलपमेंट ट्यूटोरियल',
        'FreeCodeCamp - मुफ्त में कोडिंग सीखें',
        'MDN Web Docs - विस्तृत डॉक्यूमेंटेशन'
      ]
    },
    en: {
      title: 'How to Create a Website',
      subtitle: 'Learn to build your own website - step by step',
      intro: 'What is a Website?',
      introText: 'A website is a digital page displayed on the internet. We use HTML, CSS, and JavaScript to create it.',
      stepsTitle: 'Steps to Create a Website',
      steps: [
        {
          title: 'Learn HTML',
          desc: 'HTML creates the structure of your website. It\'s the most fundamental language that forms the backbone of every web page.'
        },
        {
          title: 'Add CSS',
          desc: 'CSS makes your website beautiful and attractive. Colors, fonts, layouts - everything is controlled by CSS.'
        },
        {
          title: 'Bring Life with JavaScript',
          desc: 'JavaScript makes your website interactive. It\'s essential for buttons, animations, and dynamic content.'
        },
        {
          title: 'Domain & Hosting',
          desc: 'To put your website live on the internet, purchase a domain name and choose a hosting service.'
        },
        {
          title: 'Upload Your Website',
          desc: 'Upload your files to the hosting server. Free services like Vercel, Netlify, or GitHub Pages are available.'
        },
        {
          title: 'Test & Launch',
          desc: 'Check everything - links, images, mobile view. Once satisfied, share your website with the world!'
        }
      ],
      toolsTitle: 'Essential Tools',
      tools: [
        { name: 'VS Code', desc: 'Best editor for writing code' },
        { name: 'Chrome DevTools', desc: 'For debugging websites' },
        { name: 'GitHub', desc: 'To save and share your code' },
        { name: 'Figma', desc: 'For creating designs' }
      ],
      demoTitle: 'Live Demo - Try Your HTML Code',
      runButton: 'Run Code',
      resourcesTitle: 'Learning Resources',
      resources: [
        'W3Schools - Learn HTML, CSS, JavaScript',
        'YouTube - Web Development Tutorials',
        'FreeCodeCamp - Learn coding for free',
        'MDN Web Docs - Comprehensive documentation'
      ]
    }
  }

  const currentContent = content[language]

  const runCode = () => {
    const demoOutput = document.getElementById('demo-output')
    if (demoOutput) {
      demoOutput.innerHTML = htmlCode
    }
  }

  return (
    <div className="container">
      <div className="hero">
        <h1>{currentContent.title}</h1>
        <p>{currentContent.subtitle}</p>

        <div className="language-toggle">
          <button
            className={language === 'hi' ? 'active' : ''}
            onClick={() => setLanguage('hi')}
          >
            हिंदी
          </button>
          <button
            className={language === 'en' ? 'active' : ''}
            onClick={() => setLanguage('en')}
          >
            English
          </button>
        </div>
      </div>

      <div className="content-section">
        <h2>{currentContent.intro}</h2>
        <p>{currentContent.introText}</p>

        <div className="code-section">
          <pre>{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Website</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is my first website.</p>
  </body>
</html>`}</pre>
        </div>
      </div>

      <div className="content-section">
        <h2>{currentContent.stepsTitle}</h2>
        <div className="steps-grid">
          {currentContent.steps.map((step, index) => (
            <div key={index} className="step-card">
              <h3>
                <span className="step-number">{index + 1}</span>
                {step.title}
              </h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="content-section">
        <h2>{currentContent.toolsTitle}</h2>
        <div className="tools-grid">
          {currentContent.tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <h4>{tool.name}</h4>
              <p>{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="content-section">
        <h2>{currentContent.demoTitle}</h2>
        <div className="interactive-demo">
          <textarea
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            placeholder="Enter your HTML code here..."
          />
          <button className="run-btn" onClick={runCode}>
            ▶ {currentContent.runButton}
          </button>
          <div className="demo-output" id="demo-output">
            <p style={{color: '#999', textAlign: 'center'}}>
              {language === 'hi' ? 'आउटपुट यहाँ दिखेगा...' : 'Output will appear here...'}
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>{currentContent.resourcesTitle}</h2>
        <ul className="resources-list">
          {currentContent.resources.map((resource, index) => (
            <li key={index}>{resource}</li>
          ))}
        </ul>
      </div>

      <div style={{textAlign: 'center', padding: '40px 0', color: 'white'}}>
        <p>{language === 'hi'
          ? '© 2024 - शुभकामनाएं आपकी वेब डेवलपमेंट यात्रा के लिए! 🚀'
          : '© 2024 - Best wishes for your web development journey! 🚀'
        }</p>
      </div>
    </div>
  )
}
