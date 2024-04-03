const talks = [
    {
      key: 'dbreach-blackhat-us-2021',
      title: 'DBREACH: Database Reconnaissance and Exfiltration via Adaptive Compression Heuristics',
      mainUrl: 'https://www.youtube.com/watch?v=e0obU-kREdc',
      events: [
        {
          name: 'BlackHat US 2021',
          url: 'https://www.youtube.com/watch?v=e0obU-kREdc',
        }
      ]
    },
    {
      key: 'tees-zeroknowledge-fm-101',
      title: 'TEEs with Yan Michalevsky from Anjuna',
      mainUrl: 'https://www.zeroknowledge.fm/101',
      events: [
        {
          name: 'Zeroknowledge.fm Podcast',
          url: 'https://www.zeroknowledge.fm/101',
        }
      ]
    },
    {
      key: 'cosmix-multiple-events',
      title: 'CoSMIX: Compiler-based System for Secure Memory Instrumentation and Execution in Enclaves',
      mainUrl: 'https://youtu.be/fSn8nIy0eD0?t=43',
      events: [
        {
          name: 'SGX Community Workshop at Intel',
        },
        {
          name: 'Open Source Enclave Workshop 2019 (OSEW\'19)',
        },
        {
          name: 'Stanford Security Lunch',
        }
      ]
    },
    {
      key: 'rsa-signatures-ashes-2018',
      title: 'RSA Signatures Under Hardware Restrictions',
      mainUrl: 'files/rsaexp.pdf',
      events: [
        {
          name: 'ACM Workshop on Attacks and Solutions in Hardware Security (ASHES 2018)',
          url: 'files/rsaexp.pdf',
        }
      ]
    },
    {
      key: 'ethereum-bugs-multiple-events',
      title: 'Ethereum Bugs Through the Lens of Formal Verification',
      mainUrl: 'https://www.youtube.com/watch?v=Ru6X043Q63U',
      events: [
        {
          name: 'Silicon Valley Ethereum Meetup',
          url: 'https://www.youtube.com/watch?v=Ru6X043Q63U',
        },
        {
          name: 'Stanford Security Lunch',
          url: 'files/ecf.pdf',
        }
      ]
    },
    {
      key: 'space-tee-ashes-2017',
      title: '(WaC) SpaceTEE: Secure and Tamper-proof Computing in Space using CubeSats',
      mainUrl: 'files/ashes.pdf',
      events: [
        {
          name: 'ACM Workshop on Attacks and Solutions in Hardware Security (ASHES 2017)',
        }
      ]
    },
    {
      key: 'decentralizing-policy-hiding-abe-multiple',
      title: 'Decentralizing Policy-hiding Attribute-based Encryption',
      mainUrl: 'files/dphabe.pdf',
      events: [
        {
          name: 'Stanford Security Lunch talk',
          url: 'files/dphabe.pdf',
        },
        {
          name: '23rd European Symposium on Research in Computer Security (ESORICS 2018)',
          url: 'files/dphabe.pdf',
        }
      ]
    },
    {
        key: 'mobile-security-and-privacy-multiple',
        title: 'Mobile Security and Privacy: Attacks and Defenses',
        mainUrl: 'files/mobisec.pdf',
        events: [
        {
            name: 'PhD Oral Defense Examination at Stanford',
        },
        {
            name: 'VMware Research',
        },
        {
            name: 'Visa Research',
        }
        ]
    },
    {
        key: 'privately-finding-common-friends-stanford-lunch',
        title: 'Privately Finding Common Friends of Friends in Social Networks',
        mainUrl: '#', // Assuming no specific main URL available
        events: [
        {
            name: 'Stanford Security Lunch talk',
        }
        ]
    },
    {
        key: 'securing-distributed-computation-hebrew-u',
        title: 'Securing Distributed Computation via Trusted Quorums',
        mainUrl: 'files/securereduce.pdf',
        events: [
        {
            name: 'Seminar talk at the Hebrew University',
            url: 'files/securereduce.pdf',
        }
        ]
    },
    {
        key: 'mashable-multiple-events',
        title: 'MASHaBLE: Mobile Applications of Secret Handshakes over Bluetooth LE',
        mainUrl: 'files/mashable.pdf',
        events: [
            {
                name: 'Seminar talk at Columbia University',
            },
            {
                name: 'The 22nd Annual Conference on Mobile Computing and Networking (MobiCom\'16)',
                url: 'https://www.youtube.com/watch?v=-Sq7g1aPDmc',
            },
            {
                name: 'Seminar talk at Tel-Aviv University',
            },
            {
                name: 'Stanford Security Lunch talk',
            },
            {
                name: 'BlackHat Asia 2017, Singapore',
                url: 'https://www.blackhat.com/asia-17/briefings.html#mashable-mobile-applications-of-secret-handshakes-over-bluetooth-le',
            }
        ]
    },
    {
        key: 'eavesdropping-cybertech-2016',
        title: 'Eavesdropping, Location Tracking and other Side-Channels on Mobile Devices',
        mainUrl: 'side-channels/cybertech.html',
        events: [
        {
            name: 'CyberTech 2016, Tel Aviv, Israel',
            url: 'https://www.cybertechisrael.com//node/966',
        }
        ]
    },
    {
        key: 'sommeprivee-stanford-security-lunch',
        title: 'SommePrivée: Privacy Preserving Reports for Rare Occurrences',
        mainUrl: '#', // Assuming no specific main URL available
        events: [
        {
            name: 'Stanford Security Lunch talk',
            url: 'http://securitylunch.stanford.edu',
        }
        ]
    },
    {
        key: 'powerspy-multiple-events',
        title: 'PowerSpy: Location Tracking using Mobile Device Power Analysis',
        mainUrl: 'side-channels/powerspy.html',
        events: [
        {
            name: 'Invited talk at the Technion CE Club Seminar',
            url: 'http://ceclub.technion.ac.il/past.html',
        },
        {
            name: 'Systems Seminar at the Hebrew University, Jerusalem',
        },
        {
            name: 'Stanford Annual Security Workshop 2015',
            url: 'https://forum.stanford.edu/events/2015security.php',
        },
        {
            name: '24th USENIX Security Symposium (USENIX Security \'15)',
            url: 'https://www.usenix.org/conference/usenixsecurity15/technical-sessions/presentation/michalevsky',
        },
        {
            name: 'Bay Area Security Research Summit 2015',
            url: 'http://www.bayareasrs.org/2015/',
        },
        {
            name: 'Stanford Security Lunch talk',
            url: 'http://securitylunch.stanford.edu',
        }
        ]
    },
    {
        key: 'side-channel-attacks-multiple-events',
        title: 'Side-Channel Attacks on Mobile Devices',
        mainUrl: 'side-channels/index.html',
        events: [
        {
            name: 'Seminar at the Electrical Engineering Department at Tel-Aviv University',
        },
        {
            name: 'RSA Conference US 2015',
            url: 'https://www.rsaconference.com/events/us15/agenda/sessions/1512/side-channels-in-the-21st-century-information',
        },
        {
            name: 'UIUC CSL Student Conference 2015',
            url: 'side-channels/csl.html',
        },
        {
            name: 'Invited talk at Qualcomm Research',
        }
        ]
    },
    {
        key: 'gyrophone-multiple-events',
        title: 'Gyrophone: Recognizing Speech from Gyroscope Signals',
        mainUrl: 'https://2459d6dc103cb5933875-c0245c5c937c5dedcca3f1764ecc9b2f.ssl.cf2.rackcdn.com/sec14/michalevsky.mp4',
        events: [
        {
            name: 'BlackHat Europe 2014',
            url: 'https://www.youtube.com/watch?t=12&v=PVpBrum-H0Y',
        },
        {
            name: '23rd USENIX Security Symposium (USENIX Security \'14)',
            url: 'https://2459d6dc103cb5933875-c0245c5c937c5dedcca3f1764ecc9b2f.ssl.cf2.rackcdn.com/sec14/michalevsky.mp4',
        },
        {
            name: 'Seminar at the Technion Electrical Engineering Department',
        },
        {
            name: 'Stanford Security Lunch Talk',
            url: 'http://securitylunch.stanford.edu',
        }
        ]
    }
];        
  

function Talk(props) {
    return (
        <li>
            <b><a href={props.mainUrl}>{props.title}</a></b><br/>
            {props.events.map((event, index) => (
                <i key={index}>
                    {event.url ? <a href={event.url}>{event.name}</a> : event.name}
                    <br/>
                </i>
            ))}
        </li>
    );
}

function Talks(props) {
    return (
        <section className="columns">
            <h2>Talks</h2>
            {talks.map(t => <Talk {...t}/>)}
        </section>
    )
}

export default Talks;