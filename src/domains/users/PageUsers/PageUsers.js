import React from 'react';
import { Button, Divider, notification, Skeleton, Space, Table } from 'antd';



const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Category 1',
        value: 'Category 1',
        children: [
          {
            text: 'Yellow',
            value: 'Yellow',
          },
          {
            text: 'Pink',
            value: 'Pink',
          },
        ],
      },
      {
        text: 'Category 2',
        value: 'Category 2',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
    width: '30%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (_a, _b) => _a.age - _b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    width: '40%',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  // eslint-disable-next-line no-console
  console.log('params', pagination, filters, sorter, extra);
};

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

const PageUsers = () => {
  return (
    <div>
      Users page

      <div>
        Skeleton
        <Skeleton />
      </div>

      <Space>
        <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
        <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
        <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
        <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
      </Space>

      <Divider orientation="left" plain>
        Left Text DIVIDER
      </Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>


      <div>
        TABLE
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque urna tincidunt velit mollis scelerisque. Vestibulum facilisis turpis eu orci egestas ultricies id quis magna. Praesent sit amet posuere nisl. Maecenas aliquet ante finibus iaculis porttitor. Sed finibus gravida vulputate. Maecenas et scelerisque tortor, et fermentum lacus. Integer sed massa id risus porta dapibus eu efficitur justo. Pellentesque imperdiet placerat nisl, nec aliquam purus sagittis id. Proin molestie nisl vitae libero feugiat lobortis. Morbi commodo neque pellentesque eros tristique condimentum non eu dolor. Donec ornare ante nisi, id congue turpis molestie sed.
      Vivamus hendrerit tempor lobortis. Duis nec eros suscipit, congue elit vitae, pellentesque ipsum. Integer eleifend ullamcorper consectetur. Vestibulum justo justo, porttitor nec odio sed, auctor feugiat lectus. Ut imperdiet egestas leo vel scelerisque. Etiam sed volutpat massa. Nulla molestie finibus mauris. Vestibulum venenatis, risus eget varius consectetur, felis turpis fringilla nisi, non finibus massa velit sit amet orci. Quisque lacinia, ipsum sed gravida maximus, purus ligula lobortis lacus, eget vestibulum nisl nibh vitae tortor. Proin sem mauris, rhoncus at lorem in, varius consectetur neque. Aenean auctor tellus eget tortor dapibus, quis blandit nisi suscipit. Nunc consectetur ligula quis sem tempor, ac consectetur diam condimentum. In hac habitasse platea dictumst. Sed eget nunc eget erat fermentum pharetra.
      In elit arcu, interdum vel congue quis, egestas sit amet turpis. Ut at facilisis erat. Maecenas id justo pretium, semper diam a, tincidunt turpis. Morbi vestibulum ullamcorper nulla a vulputate. Nulla lacus felis, tempor at porta eget, dapibus at felis. Suspendisse et dui eleifend, rhoncus nulla at, imperdiet augue. Proin magna massa, dapibus nec dui hendrerit, laoreet semper turpis. Vestibulum quam ex, congue eget dapibus ut, tempus ut ipsum. Nam auctor odio vitae dolor dapibus molestie.
      Proin sed diam vitae mauris commodo eleifend ac a dolor. Curabitur suscipit pellentesque est, sit amet molestie sapien accumsan quis. Pellentesque ipsum mi, commodo quis mauris eu, faucibus mattis ex. Donec ultrices mi eget mollis varius. Ut vel fringilla ante. Donec rhoncus lacus vel velit tincidunt auctor. Proin commodo elit sem. Morbi pellentesque id libero ut feugiat. Nullam orci tellus, consequat non nisl eu, bibendum lacinia sapien. Donec feugiat dictum mi a luctus.
      Phasellus vel quam rutrum, maximus metus vitae, maximus tortor. Morbi nec lobortis turpis. Vestibulum rutrum ullamcorper malesuada. Suspendisse commodo tellus vitae vulputate vulputate. Praesent vitae nulla eu nibh pharetra feugiat sit amet nec justo. Quisque bibendum at sapien et porta. Aliquam ultricies commodo nibh ut hendrerit. Ut et gravida libero. Vestibulum lectus odio, feugiat in ex at, vehicula blandit nibh. Donec luctus in mi sed venenatis.
      Pellentesque eros metus, volutpat sed nisl sit amet, auctor rutrum felis. Nunc non risus turpis. Duis pharetra iaculis arcu et tincidunt. Proin ultricies fermentum rutrum. Vivamus venenatis ante vitae elit iaculis, vitae fermentum purus commodo. Proin eget turpis et augue convallis tincidunt. Morbi cursus, velit vel aliquet volutpat, odio elit sodales justo, at iaculis libero dui vitae leo. Quisque ultricies eros ac purus cursus rhoncus. Etiam hendrerit, eros sed finibus bibendum, lorem lorem gravida nisi, ac iaculis sem ante non lacus. Sed placerat odio quis dapibus luctus. Vivamus lobortis egestas arcu et placerat. Phasellus tincidunt turpis massa, vel ultrices nisl ultrices et. Cras maximus tincidunt mauris, a vehicula nunc placerat vel. Curabitur in odio condimentum, volutpat diam eget, vulputate tellus.
      Fusce dictum felis sit amet malesuada interdum. Aliquam et sapien tellus. Curabitur rhoncus in dui ac luctus. Nullam maximus scelerisque tellus, condimentum hendrerit augue condimentum a. Ut vitae lectus convallis, gravida lorem in, porttitor augue. Vestibulum fermentum augue nec mauris venenatis euismod. Cras semper elit a euismod tincidunt. Sed vitae porttitor neque. Aliquam euismod viverra metus vitae elementum.
      Proin mi erat, sagittis in sem in, vulputate sollicitudin ex. Pellentesque auctor, metus id dignissim consectetur, ex diam mollis quam, et mollis neque magna et urna. Sed elit justo, porta sit amet diam vitae, suscipit sodales velit. Sed blandit sit amet mi sit amet pretium. Maecenas vel faucibus nisl. Morbi tellus ante, vestibulum vitae turpis at, fringilla dapibus dui. In ac nibh augue. Integer felis lorem, varius sed lobortis ac, placerat mollis sapien. Donec blandit eget nisi et vestibulum. Sed sit amet iaculis tellus. Proin iaculis augue vitae felis mollis, vitae consequat nisi hendrerit. Fusce ac nisl ac lorem pretium venenatis. Curabitur eget neque sit amet massa vestibulum vulputate id a neque.
      Integer lacinia libero sed leo posuere, suscipit placerat ipsum pretium. Phasellus aliquet, lacus sit amet vulputate elementum, velit mauris egestas augue, id suscipit metus enim ut sem. Curabitur egestas felis tellus, nec pulvinar enim pulvinar sit amet. Mauris vel velit non turpis feugiat tincidunt. In accumsan tortor sapien, sit amet facilisis sem dictum ac. Donec vitae eros id sapien porta fringilla. In at velit ut ipsum feugiat porttitor at a velit.
      Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut ipsum metus, placerat eget erat ut, dignissim laoreet turpis. Nullam in ornare velit. Donec ipsum est, vestibulum vel urna eu, tincidunt varius enim. Phasellus condimentum, ligula at tempor lobortis, neque justo sodales orci, consectetur egestas nunc velit vel neque. Duis ornare interdum libero quis lacinia. Donec vestibulum urna eu ante sagittis, vitae dapibus mi efficitur. Maecenas ut est sit amet sapien aliquam ullamcorper. Praesent in pellentesque risus, eget sollicitudin arcu. Vestibulum eget lectus ac felis dictum vulputate. Donec ex metus, condimentum non tincidunt ut, commodo ac sem. Pellentesque facilisis vestibulum semper. Etiam tempus magna vitae turpis maximus, a egestas metus viverra. Sed erat ligula, scelerisque finibus viverra dignissim, fermentum ut dui.
    </div>
  );
};


export default PageUsers;
