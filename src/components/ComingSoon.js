import React from 'react';
import Counter from './Counter';
import SubscriptionForm from './SubscriptionForm';

export default function ComingSoon() {
  return (
    <div className="size1 overlay1">
      <div className="size1 flex-col-c-m p-l-15 p-r-15 p-t-50 p-b-50">
        <h3 className="l1-txt1 txt-center p-b-25">Coming Soon</h3>

        <p className="m2-txt1 txt-center p-b-48">
          Our website is under construction. Follow us for updates now!
        </p>

        <Counter />

        <SubscriptionForm />
      </div>
    </div>
  );
}
