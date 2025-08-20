import thesis from '../assets/thesis.pdf';

const publications = [
    {
      key: 'acns-2025-g-dbreach',
      title: 'G-DBREACH Attacks: Algorithmic Techniques for Faster and Stronger Compression Side Channels',
      url: 'https://www.cs.unc.edu/~saba/papers/gdbreach.pdf',
      pub: 'Applied Cryptography and Network Security (ACNS) 2025',
      code: 'https://github.com/bnbourassa/gdbreach-attacks'
    },
    {
      key: 'https://dl.acm.org/doi/10.1561/1300000070',
      title: 'High Performance, Low Energy, and Trustworthy Blockchains Using Satellites',
      url: 'https://dl.acm.org/doi/10.1561/1300000070',
      pub: 'Foundations and Trends® in Networking, Volume 13, Issue 4'
    },
    {
      key: 'https://www.computer.org/csdl/proceedings-article/sp/2023/933600b455/1Js0DYPDRRu',
      title: 'DBREACH: Stealing from Databases Using Compression Side Channels',
      url: 'https://www.computer.org/csdl/proceedings-article/sp/2023/933600b455/1Js0DYPDRRu',
      pub: '2023 IEEE Symposium on Security and Privacy (SP)'
    },
    {
      key: 'https://arxiv.org/abs/2211.07185',
      title: 'Securing Access to Untrusted Services From TEEs with GateKeeper',
      url: 'https://arxiv.org/abs/2211.07185',
      pub: 'arXiv'
    },
    {
      key: 'https://www.usenix.org/conference/atc19/presentation/orenbach',
      title: 'CoSMIX: A Compiler-based System for Secure Memory Instrumentation and Execution in Enclaves',
      url: 'https://www.usenix.org/conference/atc19/presentation/orenbach',
      pub: "2019 USENIX Annual Technical Conference (USENIX ATC'19)"
    },
    {
      key: 'https://dl.acm.org/citation.cfm?id=3266451',
      title: 'RSA Signatures under Hardware Restrictions',
      url: 'https://dl.acm.org/citation.cfm?id=3266451',
      pub: 'Attacks and Solutions in Hardware Security, co-located with CCS (ASHES 2018)'
    },
    {
      key: 'https://link.springer.com/chapter/10.1007%2F978-3-319-98989-1_27',
      title: 'Decentralized Policy-Hiding ABE with Receiver Privacy',
      url: 'https://link.springer.com/chapter/10.1007%2F978-3-319-98989-1_27',
      pub: '23rd European Symposium on Research in Computer Security (ESORICS 2018)'
    },
    {
      key: 'https://popl18.sigplan.org/event/popl-2018-papers-online-detection-of-effectively-callback-free-objects-with-applications-to-smart-contracts',
      title: 'Online Detection of Effectively Callback Free Objects with Applications to Smart Contracts',
      url: 'https://popl18.sigplan.org/event/popl-2018-papers-online-detection-of-effectively-callback-free-objects-with-applications-to-smart-contracts',
      pub: '45th ACM SIGPLAN Symposium on Principles of Programming Languages (POPL 2018)'
    },
    {
      key: 'https://arxiv.org/abs/1710.01430',
      title: 'SpaceTEE: Secure and Tamper-proof Computing in Space using CubeSats',
      url: 'https://arxiv.org/abs/1710.01430',
      pub: 'ACM Workshop on Attacks and Solutions in Hardware Security (ASHES 2017)'
    },
    {
      key: 'http://dl.acm.org/citation.cfm?id=2973778',
      title: 'MASHaBLE: Mobile Applications of Secret Handshakes over Bluetooth LE',
      url: 'http://dl.acm.org/citation.cfm?id=2973778',
      pub: "Proceedings of the 22nd annual international conference on mobile computing and networking (MobiCom'16)"
    },
    {
      key: 'http://crypto.stanford.edu/powerspy',
      title: 'PowerSpy: Location Tracking using Mobile Device Power Analysis',
      url: 'http://crypto.stanford.edu/powerspy',
      pub: "24th USENIX Security Symposium (USENIX Security '15) conference proceedings"
    },
    {
      key: 'http://crypto.stanford.edu/gyrophone',
      title: 'Gyrophone: Recognizing Speech from Gyroscope Signals',
      url: 'http://crypto.stanford.edu/gyrophone',
      pub: "23rd USENIX Security Symposium (USENIX Security '14)"
    },
    {
      key: 'http://arxiv.org/abs/1408.1416',
      title: 'Mobile Device Identification via Sensor Fingerprinting',
      url: 'http://arxiv.org/abs/1408.1416',
      pub: 'Technical report'
    },
    {
      key: 'http://lac.linuxaudio.org/2014/papers/13.pdf',
      title: 'Extending the Faust VST Architecture with Polyphony, Portamento and Pitch Bend',
      url: 'http://lac.linuxaudio.org/2014/papers/13.pdf',
      pub: 'Linux Audio Conference 2014 proceedings'
    },
    {
      key: 'http://www.eurasip.org/Proceedings/Eusipco/Eusipco2011/papers/1569414913.pdf',
      title: 'Speaker Identification Using Diffusion Maps',
      url: 'http://www.eurasip.org/Proceedings/Eusipco/Eusipco2011/papers/1569414913.pdf',
      pub: 'EUSIPCO 2011: 19th European Signal Processing Conference'
    },
    {
      key: 'http://dl.acm.org/citation.cfm?id=1866841',
      title: 'Venus: Verification for Untrusted Cloud Storage',
      url: 'http://dl.acm.org/citation.cfm?id=1866841',
      pub: "CCSW '10: Proceedings of the 2010 ACM workshop on Cloud computing security"
    },
    {
      key: 'http://ieeexplore.ieee.org/document/5475946/',
      title: 'Fast H.264 Picture-in-Picture (PIP) Transcoder with B-Slices and Direct Mode Support',
      url: 'http://ieeexplore.ieee.org/document/5475946/',
      pub: 'MELECON 2010 - 2010: 15th IEEE Mediterranean Electrotechnical Conference'
    }
  ];  

function Publication(props) {
    return (
        <li>
            <b><a href={props.url}>{props.title}</a></b>
            <br/>
            <i>{props.pub}</i> {props.code && <a href={props.code}>(code)</a>}
        </li>
    );
}

function Home(props) {
    return (
        <div>
            <section className="columns">
                <p>I'm a co-founder of <a href="https://www.cryptosat.io">Cryptosat</a>, a company at the intersection of 
                space (satellites) and Web3/Blockchain, and a co-founder and former CTO of <a href="https://www.anjuna.io">Anjuna</a>, 
                an enterprise security company focused on Confidential Computing.<br/>
                I hold a PhD in security and applied cryptography from Stanford University,
                where I was fortunate to be advised by <a href="https://crypto.stanford.edu/~dabo">Dan Boneh</a>.
                My research interests include Computers Security and Systems, 
                Trusted Execution Environments (SGX),
                Mobile Security and Privacy, Applied Cryptography and Smart Contracts. 
                My work has been covered by BBC, Wired, Engadget, KQED, and other media outlets.
                I'm mostly proud of being top-ranked on HackerNews.
                Before attending Stanford, I worked in the industry as an R&amp;D team lead and software engineer, 
                mostly in networks, embedded software and security.</p>
            </section>

            <section className="columns">
                <h2>Publications</h2>
                {publications.map(p => <Publication key={p.key} title={p.title} url={p.url} pub={p.pub} code={p.code}/>)}
            </section>

            <section className="columns">
                <h2>PhD Thesis</h2>
                Mobile Security and Privacy: Attacks and Defenses (<a href={thesis}>thesis</a>)
            </section>
        </div>
    );
}

export default Home;