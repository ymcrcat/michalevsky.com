function Software(props) {
    return (
        <section className="columns content-card">

            <p><h3><a href="https://rgpu.dev"><b>rGPU</b></a></h3>
            rGPU runs GPU work on a remote NVIDIA machine while your application stays on your laptop.
            It offers a PyTorch backend that exposes a native <code>rgpu</code> device over an SSH tunnel,
            and a CUDA compatibility shim that lets existing Linux CUDA binaries
            (including stock CUDA PyTorch) run against the remote GPU without modification.
            </p>
            <br/>
            <p><h3><a href="https://butterlampaudio.com"><b>Butterlamp Audio</b></a></h3>
            Butterlamp Audio is my music software project. The fist plugin is Tilichu, 
            a wavetable synthesizer plugin with two oscillators, granular and spectral source engines, 
            a 32-slot modulation matrix, a full effects rack, 
            and an AI-powered generator that turns text descriptions into patches.
            </p>
            <br/>
            <p><h3><a href="https://hadavarmail.com"><b>Hadavar Mail</b></a></h3>
            Hadavar is a local-first macOS mail client that indexes your mailbox on-device,
            groups threads by what they need from you, summarizes long ones,
            and drafts replies in your voice.
            </p>
            <br/>
            <p><h3><a href="https://budgetbreeze.io"><b>Budgetbreeze</b></a></h3>
            Budgetbreeze is a personal finance dashboard that connects bank, card, and investment
            accounts to track net worth, cash flow, spending, subscriptions, and AI-powered insights
            in one place.
            </p>
            <br/>
            <p><h3><a href="https://github.com/ymcrcat/soroban-privacy-pools"><b>Privacy Pools for Stellar</b></a></h3>
            A prototype of Privacy Pools for the <a href="https://stellar.org">Stellar</a> blockchain using ZK proofs.
            </p>
            <br/>
            <p><h3><a href="https://github.com/ymcrcat/stellar-dark-pool"><b>Dark Pool Trading for Stellar</b></a></h3>
            A prototype of Dark Pool Trading for the <a href="https://stellar.org">Stellar</a> blockchain using TEEs.
            </p>
            <br/>
            <p><h3><a href="https://www.boxstreamapp.com/"><b>BoxStream</b></a></h3>
            BoxStream is a cloud music player for Android, currently supporting streaming audio from Dropbox.
            Dropbox is a great way to store your music or podcasts and organize them conveniently,
            so that they are accessible on each one of your devices.
            The application is available on 
            the <a href="https://play.google.com/store/apps/details?id=com.michalevsky.boxstream">Google Play Store</a>.
            </p>
            <br/>
            <p><h3><a href="http://faust.grame.fr/"><b>Faust</b></a></h3>
            I used to contribute to the development of the VSTi architecture for the Faust
            musical signal processing language.
            Faust currently supports VST audio effects and instruments for 32 and 64-bit architectures.
            </p>

		</section>
    )
}

export default Software;
