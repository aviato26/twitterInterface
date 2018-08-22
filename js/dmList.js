
let dmInfo = (dm) => {
  let dms = [];
  let stamp;

  for(let i = 0; i < dm.events.length; i++){
    if(i > 4){ break; }

      stamp = dm.events[i].created_timestamp;
      dms.push(
        {
          time: Math.floor(Math.abs( new Date() - new Date(parseInt(stamp))) / 36e5),
          text: dm.events[i].message_create.message_data.text,
          id: (dm.events[i].message_create.sender_id === '1025834677792194560') ? true : false
        }
      )
    }
    return dms;
  }

module.exports = dmInfo
