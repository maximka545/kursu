class TBankomat{
  constructor(){
    this.data = data;
    }
    get maxSum() {
      return this.data.reduce((prevSum, item)=>prevSum + item.note*item.count, 0)
    }
    get minSum() {
      const minNote = this.data.reduce(
        (prevNote, item)=>,
        item.count > 0 && item.note < prevNote ? item.note : prevNote,
         1000
       );
       return minNote === 1000 ? 0 : minNote;
    },
    getSum(){
      const notesToGive =[];
      // this.data.sort((item1, item2)=> item2.note - item1.note)
      for (let ind = 0 ind < this.data.length && sum > 0; ind++) {
        const noteObj = this.data[ind]
        if (noteObj.count > 0 && sum > noteObj.note) {
        const noteCount = Math.min(
          noteObj.count,
          Math.floor(sum/noteObj.note))
          sum -= noteObj.note * noteCount
          notesToGive.push({
            note: noteObj.note,
            count: noteCount
            noteIndex: ind
          })
        }
      }
      if (sum === 0 ) {
        notesToGive.forEach((item) => (this.data[item.nodeIndex].count -= item.count)
      );
      return notesToGive
        // notesToGive.forEach(item =>{
        //   const itemIdex = this.data.findIndex(el => el.note === item.note);
        //   this.data[itemIndex].count -= item.count
        // })
      }
      else
      thow new Error('Не має в наявності');
    }
  }







const initialData = [
      {
        note: 200,
        count: 7
      },
      {
        note: 100,
        count: 9
      },
      {
        note: 50,
        count: 9
      },
      {
        note: 20,
        count: 9
      },
      {
        note: 10,
        count: 9
      },
      {
        note: 5,
        count: 9
      }
    ]

const bankomat = new TBankomat(initialData);
  console.log(bankomat.getSum(475))
