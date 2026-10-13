export const content = {
  sidebar: {
    name: "Yong Man Ting",
    role: "Business AI Systems",
    bio: "Building intuitive digital platforms, AI-powered solutions, and data-driven business strategies. Based in Singapore.",
    navExp: "01. Experience",
    navProj: "02. Projects",
    navHack: "03. Hackathons",
    navEdu: "04. Education",
    linkedin: "LinkedIn Profile"
  },
  experience: {
    title: "Experience",
    jobs: [
      {
        id: 1,
        date: "Sep 2025 - Present",
        title: "Scratch Facilitator",
        company: "Invictus International School",
        desc: "Conduct engaging Scratch game design simulations for students aged 7-12 to foster creativity and coding. Incorporate interactive, hands-on activities to trigger students' problem-solving abilities."
      },
      {
        id: 2,
        date: "Apr 2024 - Mar 2025",
        title: "R&D Engineer Intern",
        company: "Government Technology (GovTech)",
        desc: "Engineered an AI-powered Proof of Concept utilizing Retrieval Augmented Generation (RAG) to accelerate Singapore's building regulatory approval process. Bridged technical capabilities with operational needs by integrating real-time knowledge bases."
      }
    ]
  },
  projects: {
    title: "Projects",
    activeBadge: "Active Project",
    internshipBadge: "Internship Project",
    items: [
      {
        id: "gopark",
        title: "goPark: Smart Parking Discovery",
        subtitle: "NUS Orbital (Apollo 11) • Team 6742 • 2026",
        desc: "Engineered a full-stack smart parking application to solve drastic price variances and 'carpark full' frustrations for Singaporean drivers. Integrated OneMap SG for natural language landmark routing and HDB/LTA APIs for live availability tracking. Developed with a dynamic costing algorithm to instantly calculate the absolute cheapest parking options based on arrival time, duration, and hidden flat-rate rules.",
        tech: ['React', 'Express.js', 'PostgreSQL', 'Docker', 'Leaflet', 'REST API'],
        links: [
          { label: "🌐 Visit Live Website", url: "https://gopark.pengu.app", primary: true },
          { label: "▶ Watch Pitch Video", url: "https://drive.google.com/file/d/1dHt8kRmwlc2ucybtwUlQH6D6Xyx8Pyck/view?usp=sharing" },
          { label: "View Architecture Poster", url: "/projects/gopark-poster.pdf" }
        ]
      },
      {
        id: "propify",
        title: "Propify: Housing Market Analysis",
        subtitle: "Data Exploration (Group 22) • Apr 2026",
        desc: "Conducted a comprehensive analysis of 2011-2017 Beijing property data to identify high-value investment opportunities. Uncovered insights into market seasonality (identifying optimal buying windows in June and selling in September) and location-based subway premiums to pinpoint the 'Value Sweet Spot' in districts like Changping.",
        tech: ['Data Analysis', 'Python'],
        links: [
          { label: "View Analysis Deck", url: "/projects/propify-analysis.pdf" }
        ]
      },
      {
        id: "govtech",
        title: "AI Assistant for Singapore's Building Regulatory Approval",
        subtitle: "Internship Major Project • Sep 2024 - Jan 2025",
        desc: "Built an AI proof of concept that helps government Processing Officers check building models (IFC-SG / OpenBIM) against agencies' Codes of Practice. Developed a RAG pipeline over the 350-page BCA Accessibility Code; the best pipeline reached an 84.8% completeness ratio. ",
        tech: ['RAG', 'LangChain', 'ChromaDB', 'OpenAI Assistants API', 'AWS Bedrock', 'Django', 'That Open Engine', 'Prompt Engineering'],
        links: [
          { label: "View Final Presentation", url: "/projects/govtech-corenetx-presentation.pdf" }
        ]
      },
      {
        id: "cardamage",
        title: "Car Damage Classification for Insurance Claims",
        subtitle: "Temasek Polytechnic • Deep Learning Module Project • Year 2 Sem 2",
        desc: "A coursework project exploring how computer vision could help insurers flag exaggerated vehicle damage claims. Trained CNNs to classify car images into scratch, dent and glass shatter, starting from an AlexNet baseline and comparing transfer learning with InceptionV3, VGG, ResNet50 and MobileNet. Learned first-hand that over-augmenting the data hurt performance; after rebalancing and tuning, InceptionV3 reached about 91% test accuracy and was deployed in a simple Android app with TensorFlow Lite.",
        tech: ['Python', 'TensorFlow', 'CNN', 'Transfer Learning', 'TensorFlow Lite', 'Android'],
        links: [
          { label: "View Presentation", url: "/projects/car-damage-presentation.pdf" }
        ]
      },
      {
        id: "mldp",
        title: "The Ordinary Product Recommender",
        subtitle: "Temasek Polytechnic • Machine Learning Module Project • 2023",
        desc: "A coursework project using Sephora's Kaggle review dataset to predict whether a The Ordinary product would suit a user based on their skin tone, skin type and whether they are a repeat buyer. Practised the full ML workflow: data cleaning, feature engineering (binning, encoding, resampling, VIF checks), comparing classic classifiers and grid-search tuning. The chosen Decision Tree model was served through a small Streamlit web app.",
        tech: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Data Cleaning'],
        links: [
          { label: "View Presentation", url: "/projects/mldp-sephora-presentation.pdf" },
          { label: "View Code", url: "https://drive.google.com/file/d/1Gioc41D-DymmKUqHWOsy9_6G24ngygLn/view?usp=sharing" }
        ]
      }
    ]
  },
  hackathons: {
    title: "Hackathons & Competitions",
    runnerUpBadge: "1st Runner Up",
    items: [
      {
        id: "catalystx",
        title: "CatalystX: SYMBiosis SG",
        subtitle: "Sustainability Innovation • 2025",
        desc: "Tackled the challenge of catalyzing large-scale regeneration of industrial systems. Designed a hybrid digital brokerage platform equipped with a confidential bidding engine to transform APAC industrial waste into certified, profitable, and traceable materials.",
        tech: ['Business Strategy'],
        links: [
          { label: "View Pitch Deck", url: "/certificates/catalystx-deck.pdf" },
          { label: "View Certificate", url: "/certificates/catalystx-certificate.pdf" }
        ]
      },
      {
        id: "sdg",
        title: "GGEF SDG Open Hack!",
        subtitle: "NUS Campus & Open Geneva Level • Sep 2025",
        desc: "Pitched a business case for an AI-optimized welding sequence tool designed to reduce severe manufacturing delays in shipyards. Recognized as 1st Runner Up at the NUS-level SDG Hackathon and advanced to participate in the regional Open Geneva level.",
        tech: ['AI Optimization'],
        links: [
          { label: "Campus Award", url: "/certificates/sdg-nus-certificate.pdf" },
          { label: "Open Certificate", url: "/certificates/sdg-open-certificate.pdf" }
        ]
      },
      {
        id: "singlife",
        title: "Singlife Poly-FinTech: G.A.I",
        subtitle: "Team Auraboros • Aug 2023 - Oct 2023",
        desc: "Developed a Generative AI Chatbot utilizing Large Language Models, Llama Index, Langchain, and React to enhance customer engagement. Designed to help customers overcome information overload and assist with product discovery.",
        tech: ['Generative AI', 'LlamaIndex', 'Langchain', 'React'],
        links: [
          { label: "View Pitch Deck", url: "/projects/singlife-presentation.pdf" }
        ]
      }
    ]
  },
  education: {
    title: "Education & Skills",
    degrees: [
      {
        date: "Expected May 2029",
        school: "National University of Singapore",
        degree: "Bachelor of Computing",
        detail: "Business Artificial Intelligence Systems"
      },
      {
        date: "Apr 2025",
        school: "Temasek Polytechnic",
        degree: "Diploma in Applied Artificial Intelligence",
        detail: "Graduated with GPA 3.71 • Edusave Merit Bursary"
      }
    ],
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'React', 'HTML/CSS', 'MySQL', 'Data Analysis', 'Generative AI', 'Langchain', 'LlamaIndex']
  }
};
