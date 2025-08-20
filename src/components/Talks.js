import VideoPopup from './VideoPopup';
import rsaexp from '../assets/talks/rsaexp.pdf';
import ecf from '../assets/talks/ecf.pdf';
import ashes from '../assets/talks/ashes.pdf';
import dphabe from '../assets/talks/dphabe.pdf';
import mobisec from '../assets/talks/mobisec.pdf';
import securereduce from '../assets/talks/securereduce.pdf';
import mashable from '../assets/talks/mashable.pdf';

const talks = [
    {
      key: 'dbreach-blackhat-us-2021',
      title: 'DBREACH: Database Reconnaissance and Exfiltration via Adaptive Compression Heuristics',
      mainUrl: 'https://www.youtube.com/watch?v=e0obU-kREdc',
      events: [
        {
          name: 'BlackHat US 2021',
          url: 'https://www.youtube.com/watch?v=e0obU-kREdc',
          video: 'e0obU-kREdc',
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
          video: 'fSn8nIy0eD0',
        },
        {
          name: 'Stanford Security Lunch',
        }
      ]
    },
    {
      key: 'rsa-signatures-ashes-2018',
      title: 'RSA Signatures Under Hardware Restrictions',
      mainUrl: rsaexp,
      events: [
        {
          name: 'ACM Workshop on Attacks and Solutions in Hardware Security (ASHES 2018)',
          url: rsaexp,
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
          video: 'Ru6X043Q63U',
        },
        {
          name: 'Stanford Security Lunch',
          url: ecf,
        }
      ]
    },
    {
      key: 'space-tee-ashes-2017',
      title: '(WaC) SpaceTEE: Secure and Tamper-proof Computing in Space using CubeSats',
      mainUrl: ashes,
      events: [
        {
          name: 'ACM Workshop on Attacks and Solutions in Hardware Security (ASHES 2017)',
        }
      ]
    },
    {
      key: 'decentralizing-policy-hiding-abe-multiple',
      title: 'Decentralizing Policy-hiding Attribute-based Encryption',
      mainUrl: dphabe,
      events: [
        {
          name: 'Stanford Security Lunch talk',
          url: dphabe,
        },
        {
          name: '23rd European Symposium on Research in Computer Security (ESORICS 2018)',
          url: dphabe,
        }
      ]
    },
    {
        key: 'mobile-security-and-privacy-multiple',
        title: 'Mobile Security and Privacy: Attacks and Defenses',
        mainUrl: mobisec,
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
        mainUrl: 'https://youtu.be/uUJSWpdHwdQ',
        events: [
        {
            name: 'BlackHat Europe 2014',
            url: 'https://www.youtube.com/watch?t=12&v=PVpBrum-H0Y',
        },
        {
            name: '23rd USENIX Security Symposium (USENIX Security \'14)',
            url: 'https://youtu.be/uUJSWpdHwdQ',
            video: 'uUJSWpdHwdQ'
        }
        ]
    },
    {
        key: 'mashable-multiple-events',
        title: 'MASHaBLE: Mobile Applications of Secret Handshakes over Bluetooth LE',
        mainUrl: mashable,
        events: [
            {
                name: 'Seminar talk at Columbia University',
            },
            {
                name: 'The 22nd Annual Conference on Mobile Computing and Networking (MobiCom\'16)',
                url: 'https://www.youtube.com/watch?v=-Sq7g1aPDmc',
                video: '-Sq7g1aPDmc'
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
        key: 'privately-finding-common-friends-stanford-lunch',
        title: 'Privately Finding Common Friends of Friends in Social Networks',
        mainUrl: '#',
        events: [
        {
            name: 'Stanford Security Lunch talk',
        }
        ]
    },
    {
        key: 'securing-distributed-computation-hebrew-u',
        title: 'Securing Distributed Computation via Trusted Quorums',
        mainUrl: securereduce,
        events: [
        {
            name: 'Seminar talk at the Hebrew University',
            url: securereduce,
        }
        ]
    }
];

const talks = [
    {
      key: 'decompute-2023',
      title: 'Satellites - The Perfect Air-gap for Securing Transactions and MPC Wallets',
      mainUrl: 'https://www.youtube.com/watch?v=z8uvZBlK0u0',
      events: [
        {
          name: 'Decompute 2023',
          url: 'https://www.youtube.com/watch?v=z8uvZBlK0u0',
          video: 'z8uvZBlK0u0',
        }
      ]
    },
    {
      key: 'ipfs-thing-2023',
      title: 'Compute on Data in Space',
      mainUrl: 'https://www.youtube.com/watch?v=nCI2qgH1Ha4',
      events: [
        {
          name: 'IPFS Thing 2023',
          url: 'https://www.youtube.com/watch?v=507PfSOB4a4',
          video: '507PfSOB4a4',
        }
      ]
    },
    {
      key: 'ethglobal-nyc-2024',
      title: 'SpaceGuardians presentation at EthGlobal NYC finals',
      mainUrl: 'https://youtu.be/UDQlDF4TWYM?t=3836',
      events: [
        {
          name: 'SpaceGuardians presentation at EthGlobal NYC finals',
          url: 'https://youtu.be/UDQlDF4TWYM?t=3836',
          video: 'UDQlDF4TWYM?'
        }
      ]
    },
    {
      key: 'tropt-summit-2022',
      title: 'TROPT Summit 2022: The Future of Privacy Enhancing Technologies (PETs)',
      mainUrl: 'https://www.youtube.com/watch?v=507PfSOB4a4',
      events: [
        {
          name: 'TROPT Summit 2022: The Future of Privacy Enhancing Technologies (PETs)',
          url: 'https://www.youtube.com/watch?v=507PfSOB4a4',
          video: '507PfSOB4a4',
        }
      ]
    },
    {
      key: 'dbreach-blackhat-us-2021',
      title: 'DBREACH: Database Reconnaissance and Exfiltration via Adaptive Compression Heuristics',
      mainUrl: 'https://www.youtube.com/watch?v=e0obU-kREdc',
      events: [
        {
          name: 'BlackHat US 2021',
          url: 'https://www.youtube.com/watch?v=e0obU-kREdc',
          video: 'e0obU-kREdc',
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
          video: 'fSn8nIy0eD0',
        },
        {
          name: 'Stanford Security Lunch',
        }
      ]
    },
    {
      key: 'rsa-signatures-ashes-2018',
      title: 'RSA Signatures Under Hardware Restrictions',
      mainUrl: rsaexp,
      events: [
        {
          name: 'ACM Workshop on Attacks and Solutions in Hardware Security (ASHES 2018)',
          url: rsaexp,
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
          video: 'Ru6X043Q63U',
        },
        {
          name: 'Stanford Security Lunch',
          url: ecf,
        }
      ]
    },
    {
      key: 'space-tee-ashes-2017',
      title: '(WaC) SpaceTEE: Secure and Tamper-proof Computing in Space using CubeSats',
      mainUrl: ashes,
      events: [
        {
          name: 'ACM Workshop on Attacks and Solutions in Hardware Security (ASHES 2017)',
        }
      ]
    },
    {
      key: 'decentralizing-policy-hiding-abe-multiple',
      title: 'Decentralizing Policy-hiding Attribute-based Encryption',
      mainUrl: dphabe,
      events: [
        {
          name: 'Stanford Security Lunch talk',
          url: dphabe,
        },
        {
          name: '23rd European Symposium on Research in Computer Security (ESORICS 2018)',
          url: dphabe,
        }
      ]
    },
    {
        key: 'mobile-security-and-privacy-multiple',
        title: 'Mobile Security and Privacy: Attacks and Defenses',
        mainUrl: mobisec,
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
        mainUrl: securereduce,
        events: [
        {
            name: 'Seminar talk at the Hebrew University',
            url: securereduce,
        }
        ]
    },
    {
        key: 'mashable-multiple-events',
        title: 'MASHaBLE: Mobile Applications of Secret Handshakes over Bluetooth LE',
        mainUrl: mashable,
        events: [
            {
                name: 'Seminar talk at Columbia University',
            },
            {
                name: 'The 22nd Annual Conference on Mobile Computing and Networking (MobiCom\'16)',
                url: 'https://www.youtube.com/watch?v=-Sq7g1aPDmc',
                video: '-Sq7g1aPDmc'
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
            video: 'kgD0epbAbeM'
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
        mainUrl: 'https://youtu.be/uUJSWpdHwdQ',
        events: [
        {
            name: 'BlackHat Europe 2014',
            url: 'https://www.youtube.com/watch?t=12&v=PVpBrum-H0Y',
        },
        {
            name: '23rd USENIX Security Symposium (USENIX Security \'14)',
            url: 'https://youtu.be/uUJSWpdHwdQ',
            video: 'uUJSWpdHwdQ'
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
                    {event.video ? <VideoPopup url={event.video} title={props.title} /> : null}
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
            {talks.map(t => <Talk key={t.key} title={t.title} mainUrl={t.mainUrl} events={t.events}/>)}
        </section>
    )
}

export default Talks;