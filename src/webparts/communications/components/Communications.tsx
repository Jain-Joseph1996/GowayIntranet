import * as React from 'react';
import styles from './Communications.module.scss';
import type { ICommunicationsProps } from './ICommunicationsProps';
import { Header } from './NavBar';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { Card, CardContent, Avatar, Typography } from "@mui/material";

export interface IMyWebPartProps {
  context: WebPartContext;
}


export default class Communications extends React.Component<ICommunicationsProps, IMyWebPartProps> {
  public render(): React.ReactElement<ICommunicationsProps> {
    // const {
    //  // description,
    //  // isDarkTheme,
    //   //environmentMessage,
    //   hasTeamsContext,
    //  // userDisplayName
    // } = this.props;

    const videoUrl = `https://www.youtube.com/watch?v=85srM1-F4ME`;

    return (
      <section className={styles.sectionWithBackground}>
        {/* Navigation Bar */}
        <Header />
        <section className={styles.communications}>
          {/* Section 1 */}
          <div className={`${styles.width30} ${styles.margin20}`}>
            <div className={styles.mainDiv}>
              <Card sx={{ display: "flex", alignItems: "center", padding: 2, boxShadow: 3, borderRadius: 2 }}>
                <Avatar src="../assets/user_img.png" alt="User Profile" sx={{ width: 56, height: 56, marginRight: 2 }} />
                <CardContent>
                  <Typography variant="h6" component="div">
                    John Doe
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    M365 Consultant
                  </Typography>
                </CardContent>
              </Card>
              {/* </div> */}
            </div>
            <div className={styles.mainDiv}>
              {/* Header with rounded rectangle */}
              <div className={styles.header}>
                Latest News
              </div>
              <div className={styles.backgroundRectangle}>
                {/* Content inside the background rectangle */}
                <div className={styles.newsContainer}>
                  <article className={styles.newsItem}>
                    <img
                      src="https://placehold.co/600x400/6b46c1/6b46c1"
                      alt="News 1"
                      className={styles.newsImage}
                    />
                    <div className={styles.newsContent}>
                      <h3 className={styles.newsTitle}>
                        Enterprise HR Platform Remix Coming Soon to Meta Store
                      </h3>
                      <time className={styles.newsDate}>March 24, 2024</time>
                    </div>
                  </article>
                  <article className={styles.newsItem}>
                    <img
                      src="https://placehold.co/600x400/3182ce/3182ce"
                      alt="News 2"
                      className={styles.newsImage}
                    />
                    <div className={styles.newsContent}>
                      <h3 className={styles.newsTitle}>
                        TD Releases Global Technology Ecosystem Benchmark Report
                      </h3>
                      <time className={styles.newsDate}>March 23, 2024</time>
                    </div>
                  </article>
                  <article className={styles.newsItem}>
                    <img
                      src="https://placehold.co/600x400/2c5282/2c5282"
                      alt="News 3"
                      className={styles.newsImage}
                    />
                    <div className={styles.newsContent}>
                      <h3 className={styles.newsTitle}>
                        WiseKey Demo 2023 Event: announces the list of panelists and
                        roundtables
                      </h3>
                      <time className={styles.newsDate}>March 22, 2024</time>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className={styles.mainDiv}>
              <div className={styles.header}>
                Useful Resources
              </div>
              <div className={styles.backgroundRectangle}>
                <nav className={styles.resourcesNav}>
                  <button className={styles.resourceButton}>Employee Directory</button>
                  <button className={styles.resourceButton}>Goway Branding</button>
                  <button className={styles.resourceButton}>Submit a case to IT</button>
                  <button className={styles.resourceButton}>
                    Company Communications
                  </button>
                </nav>
              </div>
            </div>
            <div className={styles.mainDiv}>
              <iframe
                width="400"
                height="240"
                src="https://www.youtube.com/watch?v=85srM1-F4ME" // Replace with your video ID
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.mainDiv}>
            <a href={videoUrl} target="_blank" rel="noopener noreferrer"></a>
              <iframe
                width="400"
                height="240"
                src="https://www.youtube.com/watch?v=ivRsglUQWms" // Replace with your video ID
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Section 2 */}
          <div className={`${styles.width40} ${styles.margin20}`}>
            <iframe
              name="embed-feed"
              title="Viva Engage"
              src="https://engage.cloud.microsoft/embed/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiIyMjEzOTU1MTc0NDAifQ?header=false&amp;footer=false&amp;theme=light&amp;includeFeedInformation=false"
              style={{
                border: '0px',
                overflow: 'auto',
                width: '100%',
                height: '1500px',
                minHeight: '1000px'
              }}
            ></iframe>
          </div>

          {/* Section 3 */}
          <div className={`${styles.width30} ${styles.margin20}`}>
            <div className={styles.mainDiv}>
              {/* Header with rounded rectangle */}
              <div className={styles.header}>
                Calendar
              </div>
              <div className={styles.backgroundRectangle}>
                {/* Content inside the background rectangle */}
                <div className={styles.calendarContainer}>
                  <img src={require('../assets/calender_img.jpg')} />
                  <div className={styles.event}>
                    <div className={styles.eventDate}>
                      <div className={styles.eventDay}>5</div>
                      <div className={styles.eventMonth}>APR</div>
                    </div>
                    <div className={styles.eventDetails}>
                      <h3 className={styles.eventTitle}>Meet & Greet</h3>
                      <time className={styles.eventTime}>3:00 PM - 4:00 PM</time>
                    </div>
                    <span className={styles.eventTag}>Online</span>
                  </div>

                  <div className={styles.event}>
                    <div className={styles.eventDate}>
                      <div className={styles.eventDay}>8</div>
                      <div className={styles.eventMonth}>APR</div>
                    </div>
                    <div className={styles.eventDetails}>
                      <h3 className={styles.eventTitle}>New Hire Orientation</h3>
                      <time className={styles.eventTime}>7:00 PM - 8:00 PM</time>
                    </div>
                    <span className={styles.eventTag}>Business</span>
                  </div>

                  <div className={styles.event}>
                    <div className={styles.eventDate}>
                      <div className={styles.eventDay}>11</div>
                      <div className={styles.eventMonth}>APR</div>
                    </div>
                    <div className={styles.eventDetails}>
                      <h3 className={styles.eventTitle}>Lunch & Learn</h3>
                      <time className={styles.eventTime}>8:00 PM - 9:00 PM</time>
                    </div>
                    <span className={styles.eventTag}>Meeting</span>
                  </div>
                  {/* Rounded button*/}
                  <div className={styles.events}>
                    Events
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mainDiv}>
              <div className={styles.header}>
                Upcoming events
              </div>
              <div className={styles.backgroundRectangle}>
                <div className={styles.eventsBackground}>
                  <div className={styles.overlay}></div>
                  <h3 className={styles.upcomingeventTitle}>Annual Awards Ceremony</h3>
                  {/* <h3 className={styles.upcomingeventTitle}>22 23 42 12</h3> */}
                </div>
              </div>
            </div>
            <div className={styles.mainDiv}>
              <div className={styles.header}>
                Anniversaries
              </div>
              <div className={styles.backgroundRectangle}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c53e83e617dc3afb11ad972b2653b4fc622ed28a?placeholderIfAbsent=true"
                  className={styles.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </section >
    );
  }
}
