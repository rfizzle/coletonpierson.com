import { NextPage } from "next";
import Article from "../../components/Article";
import Link from "next/link";
import Code from "../../components/Code";
import Image from "next/future/image";

import alertRule1 from "../../snippets/alert-rule-1.json"
import alertRule2 from "../../snippets/alert-rule-2.json"

const SecurityAlertAndEventPipeline: NextPage = () => {
  const alertStructs = require("!!raw-loader!../../snippets/alert-structs.go");

  return (
    <>
      <div className="relative overflow-hidden pb-16">
        <div className="flex px-4 sm:px-6 lg:px-8">
          <Article className="mx-auto mt-6 justify-center">
            <Link href="/projects?category=security">
              <h3 className="mx-auto cursor-pointer hover:underline">Security</h3>
            </Link>
            <h1>Security Alert and Event Pipeline</h1>
            <figure>
              <Image
                className="w-full rounded-lg"
                src="/images/alerting-pipeline.png"
                alt="Alerting Pipeline"
                width={ 5363 }
                height={ 2138 }
              />
            </figure>
            <p>
              One of the most important aspects of a Security Operations and Incident Response team is the alerting
              pipeline. There is where you archive, filter, escalate, and action on security events and alerts sent out
              by the aggregate of your security products. Many companies in their early days archive to SIEMs such as
              Splunk or Graylog. As time goes by, teams mature and data grows, and the migration from a single product
              towards more of a distributed approach is typically needed. Features such as data analytics, automation
              and orchestration, and real time data processing usually require an ecosystem of products, and an engineer
              to wire them all together to build organization specific use cases.
            </p>
            <p>
              One of my tasks recently was to build out the alerting pipeline and introduce a way to enable automations.
              Due to the extremely small size of the security engineering team at the time (only myself), and coming
              from a cloud background, I began to research what other companies were building and the lean cloud
              approaches to scaling they were using. A
              <a href="https://youtu.be/6vrIXwiCtGI" target="_blank" rel="noreferrer">
                presentation
              </a>
              by the CloudFlare team, given at a BSides Lisbon conference was the basis of which I chose to architect
              the system.
            </p>
            <h2>To Infinity and Beyond</h2>
            <p>
              After careful consideration and collaboration with the team, it was decided to build the platform on top
              of Google Cloud, utilizing Cloud Functions and PubSub messaging in order to accommodate near infinite
              scaling with little infrastructure overhead. Cloud Functions would be developed for normalization,
              correlation, enrichment, alerting, and automations. PubSub topics were used to communicate between the
              functions, as well as any on premise tools that needed to pipe data to the cloud. Due to this, we were not
              required to publish any on premise systems to the internet, nor were we required to come up with a custom
              authentication schema for our platform. Specific Cloud Functions were permitted to read from specific
              PubSub subscriptions, and on premise systems were given limited privileged service accounts to publish
              data via their related PubSub topics, all done within the confines of Google Cloud&apos;s Identity and
              Access Management service.
            </p>
            <figure>
              <Image
                className="w-full rounded-lg"
                src="/images/simple-collection-process.png"
                alt="Collector Diagram"
                width={ 2679 }
                height={ 1241 }
              />
              <figcaption>Diagram of the collector data flow into the cloud.</figcaption>
            </figure>
            <h2>A Structured Approach</h2>
            <p>
              In order to make this work, we had to devise a way to normalize the data so we could onboard multiple
              products and run them through a common pipeline. After some collaboration with the Incident Response team
              and other stakeholders, we decided on using
              <a href="https://cee.mitre.org" target="_blank" rel="noreferrer">
                MITRE&apos;s Common Event Expression
              </a>
              for security events, and a custom structured alert format, similar to the one below:
            </p>
            <figure>
              <Code colorScheme="dark" language="go" className="-mt-6">
                { alertStructs.default.toString() }
              </Code>
              <figcaption className="-mt-4">Example alert structure.</figcaption>
            </figure>
            <p>
              With a defined structure, enrichment and correlation functions were written that would apply to all alerts
              that passed through the pipeline. Enrichment from sources such as VirusTotal and RecordedFuture allowed us
              to add additional metadata to alerts and make automated decisions if that alert should be escalated to the
              Incident Response team. Correlations such as what IPs belonged to what devices across our inventory system
              and security products allowed us to string together all of our security products and execute automations
              from a single place.
            </p>
            <p>
              A rule engine was created to easily route alerts to destination such as a Slack notification in a channel,
              alert suppression, or to trigger a Cloud Function with an automation for that alert. With all of our
              in JSON, I went searching for an easy to learn expression language for the IR team to write rules with.
              We settled on using a project by Google, called
              <a href="https://opensource.google.com/projects/cel" target="_blank" rel="noreferrer">
                Common Expression Language (CEL)
              </a>
              which worked well with our existing JSON alerts and contained more than enough macros and functions to
              satisfy our use-cases. Below is an example of one rule with what we call a siren, which where destinations
              we sent alerts once they matched a rule, and could be anything from a slack channel to a HTTP webhook.
            </p>
            <figure>
              <Code colorScheme="dark" language="json" className="-mt-6">
                { JSON.stringify(alertRule1, null, 2) }
              </Code>
              <figcaption className="-mt-4">Example rule with HTTP webhook routing.</figcaption>
            </figure>
            <p>
              We also had suppression rules, which by default just routed the alert to storage, as seen in the example
              below.
            </p>
            <figure>
              <Code colorScheme="dark" language="json" className="-mt-6">
                { JSON.stringify(alertRule2, null, 2) }
              </Code>
              <figcaption className="-mt-4">Example suppression rule.</figcaption>
            </figure>
            <h2>Give Me Some Slack</h2>
            <p>
              With our team now able to build automations for alerts, we started looking into ways to trigger manual
              actions. Since we had correlated our alert data with the spread of our security suite, the IR team wanted
              a way to trigger actions on those products from one place. Actions like disabling a user or isolating a
              machine, something dangerous that they might not want to leave to automation. Slack was the communication
              method for the company, and since we were already sending alerts there, it made sense to build off that
              and add actions to those alerts. Luckily, Slack has a pretty mature framework for building stateful
              messages, so we set off to build our IR platform around it.
            </p>
            <p>
              We began with just building state management of alerts, so our responders knew which alerts were being
              worked on and which to acknowledge. Later on, we started adding common actions such as host isolation,
              evidence collection, and conducting an AV scan. With Slack being such a portable tool, responders were
              able to act even when they were away from their keyboards. An example Slack message with actions from what
              we called the IR Bot is shown below.
            </p>
            <figure>
              <Image
                className="w-full rounded-lg"
                src="/images/ir-bot.png"
                alt="IR Bot Slack Message"
                width={ 1354 }
                height={ 1170 }
              />
              <figcaption>Screenshot of an example Slack message.</figcaption>
            </figure>
            <p>
              Modals and slash commands were developed to conduct tasks such as hunting for an IoC or blocking a website
              across all of our security products. We even built approval processes for things such as permissions and
              actions. An example of one of the modals is shown below.
            </p>
            <figure>
              <Image
                className="w-full rounded-lg"
                src="/images/ir-bot-hunt.png"
                alt="IR Bot Hunt Modal"
                width={ 1058 }
                height={ 956 }
              />
              <figcaption>Screenshot of an example Slack hunt modal.</figcaption>
            </figure>
            <h2>In For a Penny, In for a Pound</h2>
            <p>
              As with all projects, cost was a major factor during our development of this system. In the end, with most
              of our alerting running through on demand cloud functions and PubSub topics, and storing logs in Google
              Cloud Storage on a pretty short hot-storage lifecycle, we ended up keeping the monthly costs well below
              1K a month for thousands of alerts and around 1TB of data a month, with a 14 month retention. This cost
              us far less than the on premise ElasticSearch cluster we had been using as a datastore earlier (especially
              if you add up operations, physical servers, maintenance, etc). The design was incredibly resilient to
              bursts and limits were able to be set for each source of logs and events.
            </p>
          </Article>
        </div>
      </div>
    </>
  )
}

export default SecurityAlertAndEventPipeline;
