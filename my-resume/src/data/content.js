export const portfolioData = {
  en: {
    languageToggle: "🇨🇳 Switch to 中文",
    sidebar: {
      name: "Yong Man Ting",
      role: "Business AI Systems",
      bio: "Building intuitive digital platforms, AI-powered solutions, and data-driven business strategies. Based in Singapore.",
      navExp: "01. Experience",
      navProj: "02. Projects",
      navEdu: "03. Education",
      linkedin: "LinkedIn Profile"
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          id: 1,
          date: "Sep 2025 - Present",
          title: "Minecraft Facilitator",
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
      title: "Projects & Hackathons",
      activeBadge: "Active Project",
      runnerUpBadge: "1st Runner Up",
      items: [
        {
          id: "gopark",
          title: "goPark: Smart Parking Discovery",
          subtitle: "NUS Orbital (Apollo 11) • Team 6742 • 2026",
          desc: "Engineered a full-stack smart parking application to solve drastic price variances and 'carpark full' frustrations for Singaporean drivers. Integrated OneMap SG for natural language landmark routing and HDB/LTA APIs for live availability tracking. Developed with a dynamic costing algorithm to instantly calculate the absolute cheapest parking options based on arrival time, duration, and hidden flat-rate rules.",
          tech: ['React', 'Express.js', 'PostgreSQL', 'Docker', 'Leaflet', 'REST API'],
          links: [
            { label: "View Architecture Poster", url: "/projects/gopark-poster.pdf" },
            { label: "▶ Watch Pitch Video", url: "/projects/gopark-video.mp4" }
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
      title: "03. Education & Arsenal",
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
  },
  zh: {
    languageToggle: "🇬🇧 Switch to English",
    sidebar: {
      name: "杨漫莛",
      role: "商业人工智能系统",
      bio: "构建直观的数字平台、人工智能解决方案和数据驱动的商业战略。常驻新加坡。",
      navExp: "01. 经验",
      navProj: "02. 项目",
      navEdu: "03. 教育",
      linkedin: "领英档案"
    },
    experience: {
      title: "工作经验",
      jobs: [
        {
          id: 1,
          date: "2025年9月 - 至今",
          title: "Minecraft 编程导师",
          company: "Invictus 国际学校",
          desc: "为7-12岁学生开展引人入胜的Scratch游戏设计模拟，以培养创造力和编程能力。结合互动实践活动，激发学生的解决问题能力。"
        },
        {
          id: 2,
          date: "2024年4月 - 2025年3月",
          title: "研发工程师实习生",
          company: "新加坡政府科技局 (GovTech)",
          desc: "利用检索增强生成 (RAG) 技术设计了人工智能概念验证，以加速新加坡的建筑监管审批流程。"
        }
      ]
    },
    projects: {
      title: "项目与黑客松",
      activeBadge: "进行中项目",
      runnerUpBadge: "亚军",
      items: [
        {
          id: "gopark",
          title: "goPark: 智能停车发现系统",
          subtitle: "新加坡国立大学 Orbital (Apollo 11) • 6742团队 • 2026",
          desc: "开发了全栈智能停车应用程序，以解决新加坡司机面临的价格差异巨大和“停车场已满”的挫败感。集成了OneMap SG和HDB/LTA API。",
          tech: ['React', 'Express.js', 'PostgreSQL', 'Docker', 'Leaflet', 'REST API'],
          links: [
            { label: "查看架构海报", url: "/projects/gopark-poster.pdf" },
            { label: "▶ 观看推介视频", url: "/projects/gopark-video.mp4" }
          ]
        },
        {
          id: "propify",
          title: "Propify: 住房市场分析",
          subtitle: "数据探索项目 (第22组) • 2026年4月",
          desc: "对2011-2017年北京房产数据进行了全面分析，以寻找高价值的投资机会。揭示了市场季节性的见解（将6月定为最佳买入期，9月为最佳卖出期）。",
          tech: ['Data Analysis', 'Python'],
          links: [
            { label: "查看分析报告", url: "/projects/propify-analysis.pdf" }
          ]
        },
        {
          id: "catalystx",
          title: "CatalystX: SYMBiosis SG",
          subtitle: "可持续创新 • 2025",
          desc: "应对促进工业系统大规模再生的挑战。设计了一个配备保密竞价引擎的混合数字经纪平台，以将亚太地区的工业废料转化为经过认证的、有利可图的、可追踪的材料。",
          tech: ['Business Strategy'],
          links: [
            { label: "查看推介文件", url: "/certificates/catalystx-deck.pdf" },
            { label: "查看证书", url: "/certificates/catalystx-certificate.pdf" }
          ]
        },
        {
          id: "sdg",
          title: "GGEF SDG Open Hack!",
          subtitle: "新大校园与日内瓦公开级别 • 2025年9月",
          desc: "提出了一个AI优化焊接顺序工具的商业案例，旨在减少造船厂严重的制造延误。在NUS级别的SDG黑客松中荣获亚军。",
          tech: ['AI Optimization'],
          links: [
            { label: "校园奖项", url: "/certificates/sdg-nus-certificate.pdf" },
            { label: "公开级别证书", url: "/certificates/sdg-open-certificate.pdf" }
          ]
        },
        {
          id: "singlife",
          title: "Singlife Poly-FinTech: G.A.I",
          subtitle: "Auraboros 团队 • 2023年8月 - 10月",
          desc: "利用大型语言模型、Llama Index、Langchain和React开发了一个生成式AI聊天机器人，以增强客户参与度并自动处理查询。",
          tech: ['Generative AI', 'LlamaIndex', 'Langchain', 'React'],
          links: [
            { label: "查看推介文件", url: "/projects/singlife-presentation.pdf" }
          ]
        }
      ]
    },
    education: {
      title: "03. 教育与技能",
      degrees: [
        {
          date: "预计 2029年5月",
          school: "新加坡国立大学",
          degree: "计算机学士",
          detail: "商业人工智能系统"
        },
        {
          date: "2025年4月",
          school: "淡马锡理工学院",
          degree: "应用人工智能文凭",
          detail: "以3.71的GPA毕业 • 获得Edusave优异助学金"
        }
      ],
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'React', 'HTML/CSS', 'MySQL', '数据分析', '生成式AI', 'Langchain', 'LlamaIndex']
    }
  }
};