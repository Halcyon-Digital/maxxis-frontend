import React from "react";
import { Container } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function TabItem() {
  return (
    <section>
      <Container>
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d29180.157333548977!2d90.37476877893148!3d23.90664565878953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755c4488706e2d9%3A0xee45004fa6ba8d03!2sTongi!3m2!1d23.9010413!2d90.4088223!5e0!3m2!1sen!2sbd!4v1665573319005!5m2!1sen!2sbd"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="dhaka"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              src="//www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14188.565963039951!2d90.41959420343217!3d23.780145108152723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1665576141629!5m2!1sen!2sbd"
              width={800}
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="dhaka"
            ></iframe>
          </TabPanel>
        </Tabs>
      </Container>
    </section>
  );
}

export default TabItem;
