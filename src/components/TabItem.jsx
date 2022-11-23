import React from 'react';
import { Container } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../assets/sass/components/_tabStyle.scss';

function TabItem() {
  return (
    <section className="tab-item">
      <Container>
        <Tabs>
          <TabList>
            <Tab>Dhaka</Tab>
            <Tab>Chittagong</Tab>
          </TabList>

          <TabPanel>
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14609.194047048746!2d90.4105852!3d23.7367322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ff637abbd8c3462!2sMaxxis%20tire!5e0!3m2!1sen!2sbd!4v1668672659612!5m2!1sen!2sbd"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="dhaka"
            ></iframe>
          </TabPanel>
          <TabPanel>
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.923557191281!2d90.36542149863531!3d23.774791080048566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5424a1e248e910b!2sHalcyon!5e0!3m2!1sen!2sbd!4v1600257797820!5m2!1sen!2sbd"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="dhaka"
            ></iframe>
          </TabPanel>
        </Tabs>
      </Container>
    </section>
  );
}

export default TabItem;
