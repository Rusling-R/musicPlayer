new (class musicPlayer {
  constructor() {
    this.elements = {
      audio: $('audio'),
      player: $('.music-player'),
      volumeMuteBtn: $('#volume-mute'),
      volumeLoudBtn: $('#volume-high'),
      volumeRange: $('#volume-range'),
      playRateBtn: $('#play-speed'),
      rateValue: $('.rate-value'),
      musicCover: $('#cover'),
      musicTitle: $('#title'),
      musicSinger: $('#singer'),
      skipBackBtn: $('#skip-back'),
      playBtn: $('#play'),
      pauseBtn: $('#pause'),
      skipForwardBtn: $('#skip-forward'),
      progress: $('#progress'),
      timeView: $('#time-view'),
      lyric: $('.lyric'),
      lyricBox: $('#lyric-box'),
    };
    this.musicID = [
      ['再见', '邓紫棋'],
      ['如果爱忘了', '蓝心羽'],
      ['达尔文', '林俊杰'],
      ['学不会', '林俊杰'],
      ['我爱你', '张含韵'],
      ['星茶会', '灰澈'],
    ];
    this.lyricsTemp = [
      '[00:02.000]作词:G.E.M.邓紫棋\n[00:04.260]作曲:G.E.M.邓紫棋\n[00:06.780]爱情的起点 都是最美的瞬间\n[00:12.950]什么铁达尼的经典 罗密欧跟朱丽叶\n[00:19.960]那些最煽情的电影情节\n[00:23.480]都说爱能超越生死离别\n[00:27.320]曾经 我们都很坚决 爱了就不改变\n[00:33.440]……\n[00:34.160]不要对我说再见  一句再见 就结束这一切\n[00:41.120]能否不要说再见 你的再见 说得那么明确\n[00:48.130]怎么我和你之间 两个世界 再也没有交接\n[00:55.570]如果告别 能不能再见\n[01:00.750]……\n[01:03.530]我们的照片  记录幸福到永远\n[01:09.360]只是再幸福的画面  只定格在一瞬间\n[01:16.430]那些慢吞吞悲情的音乐\n[01:19.800]早说过爱过之后就是离别\n[01:23.370]早该相信那些预言 我们也没有多特别\n[01:30.610]不要对我说再见 一句再见 让爱变得表面\n[01:37.610]真的不用说再见 就算再见 结局不能改变\n[01:44.690]就算我和你之间 两个世界 再也没有交接\n[01:51.820]不用抱歉 就真的再见\n[01:58.580]如果有缘 我们会再遇见 反正地球本来就很圆\n[02:05.850]就算今天 你要走得多远 反正就是一条地平线\n[02:12.840]反正愿望不一定会实现 反正承诺不一定要兑现\n[02:20.020]反正睡醒是新的一天\n[02:27.050]……\n[02:41.060]别对我说再见 一句再见 让爱变得表面\n[02:48.110]真的不用说再见 就算再见 结局不能改变\n[02:55.210]就算我和你之间 两个世界 再也没有交接\n[03:02.280]不用抱歉 就真的再见\n[03:09.440]……\n[03:10.700]爱情到终点 我们只能说再见',
      '[00:00.00]蓝心羽 - 如果爱忘了\n[00:01.40]总有一些话 来不及说了\n[00:08.00]总有一个人 是心口的朱砂\n[00:14.40]想起那些花 那些傻 眼泪落下\n[00:21.33]只留一句 你现在好吗\n[00:29.12]如果爱忘了 泪不想落下\n[00:35.60]那些幸福啊 让她替我到达\n[00:42.06]如果爱懂了 承诺的代价\n[00:48.69]不能给我的 请完全给她\n[01:06.32]总有些牵挂 旧的像伤疤\n[01:12.90]越是不碰它 越隐隐的痛在那\n[01:19.29]想你的脸颊 你的发 我不害怕\n[01:26.25]就让时间 给我们回答\n[01:32.37]如果爱忘了 泪不想落下\n[01:38.85]那些幸福啊 让她替我到达\n[01:45.32]如果爱懂了 承诺的代价\n[01:52.11]不能给我的 请完全给她\n[01:59.31]我说我忘了 不痛了\n[02:03.18]那是因为太爱太懂了\n[02:06.32]笑了 原谅了 为你也值得\n[02:12.50]用你的快乐 告诉我\n[02:16.08]现在放开双手是对的\n[02:18.96]别管我多 舍不得\n[02:24.27]如果爱忘了 就放他走吧\n[02:30.75]那些幸福啊 让她替我到达\n[02:37.22]如果爱懂了 承诺的代价\n[02:43.83]不能给我的 请完全给她\n[02:55.08]如果爱忘了 你还记得吗',
      '[00:03.00]作词:小寒\n[00:06.00]作曲:蔡健雅\n[00:09.00]编曲:林俊杰\n[00:12.00]改编曲:林俊杰\n[00:15.13]我的青春 也不是没伤痕\n[00:22.27]是明白爱是信仰的延伸\n[00:29.23]什么特征 人缘还是眼神\n[00:34.83]也不会预知爱不爱的可能\n[00:40.67]……\n[00:43.31]保持单身 忍不住又沉沦\n[00:50.42]兜着圈子来去有时苦等\n[00:57.42]人的一生 感情是旋转门\n[01:03.14]转到了最后真心的就不分\n[01:09.20]……\n[01:12.65]有过竞争 有过牺牲\n[01:16.48]被爱筛选过程\n[01:19.80]学会认真 学会忠诚\n[01:23.20]适者才能生存\n[01:26.62]懂得永恒 得要我们\n[01:34.99]进化成更好的人\n[01:39.18]……\n[01:42.47]进化成更好的人\n[01:47.03]……\n[02:03.46]我的青春 有时还蛮单纯\n[02:10.52]相信幸福取决于爱得深\n[02:17.71]读进化论 我赞成达尔文\n[02:23.09]没实力的就有淘汰的可能\n[02:29.75]……\n[02:32.02]我的替身 已换过多少轮\n[02:38.95]记忆在旧情人心中变冷\n[02:46.14]我的一生 有几道旋转门\n[02:51.45]转到了最后只剩你我没分\n[02:57.57]……\n[02:59.64]有过竞争 有过牺牲\n[03:02.79]被爱筛选过程\n[03:06.59]学会认真 学会忠诚\n[03:09.79]适者才能生存\n[03:13.01]懂得永恒 得要我们\n[03:21.95]进化成更好的人\n[03:26.68]……\n[03:28.83]进化成更好的人\n[03:34.28]……\n[03:38.33]懂得永恒 得要我们\n[03:46.55]进化成更好的人\n[03:54.14]……',
      '[00:03.00]作词:姚若龙\n[00:06.00]作曲:林俊杰\n[00:09.00]制作人:李偲菘\n[00:12.00]……\n[00:16.430]你的痛苦我都心疼\n[00:18.470]想为你解决\n[00:23.850]挡开流言 紧握你手\n[00:26.240]想飞奔往前\n[00:31.040]我相信爱能证明一切\n[00:34.670]够真心会超越时间\n[00:38.620]多付出也多了喜悦\n[00:42.550]让幸福蔓延\n[00:48.450]总是学不会再聪明一点\n[00:56.080]记得自我保护 必要时候讲些\n[01:00.719]善意谎言\n[01:03.609]总是学不会\n[01:07.558]真爱也有现实面\n[01:13.438]不是谁情愿\n[01:17.430]就能够解决\n[01:30.138]一次争吵 一个心结\n[01:31.989]累积着改变 Yeah\n[01:37.780]内心疏远足够秒杀\n[01:39.688]外表多浓烈\n[01:44.420]才发现爱不代表一切\n[01:48.218]再真心也会被阻绝\n[01:52.049]这世界天天有诡雷\n[01:55.688]随时会爆裂\n[02:00.078]还是学不会少浪漫一点\n[02:07.620]拼命着想的事未必带来感动\n[02:12.409]或被感谢\n[02:15.419]还是学不会\n[02:19.259]解释我最伤 Oh 最累\n[02:26.549]痛死都不愿怪谁 Oh\n[02:35.619]把每段痴情苦恋\n[02:39.310]在此刻排列面前\n[02:43.220]也感觉不埋怨 只怀念\n[02:55.299]总是学不会再聪明一点\n[03:02.699]记得自我保护 必要时候讲些\n[03:07.879]善意谎言\n[03:10.669]不是学不会\n[03:14.560]只是觉得爱太美\n[03:22.259]值得去沉醉\n[03:29.939]流泪',
      '[00:00.93]我爱你  就像那流星 追逐月亮\n[00:04.83]明知道  唯一方向是 陨落散场\n[00:08.97]对你的邀请  我没办法抵抗\n[00:13.10]明知道我会坠落在前方\n[00:25.00]……\n[00:35.00]你 永远不会停在 同一个地方\n[00:42.12]而我 一直都想停在 同一人身旁\n[00:48.87]你说世界是游乐场 天涯海角要去一趟\n[00:56.29]也许你不知道我不适合远航\n[01:04.65]你 说会带我一起 去翻山破浪\n[01:11.52]而我 为这刹那感动 就心神激荡\n[01:18.26]明知时间是个变量 我们终会中途散场\n[01:25.77]我还是放下一切 为你去疯狂\n[01:33.50]我爱你  就像那流星 追逐月亮\n[01:37.04]明知道  唯一方向是 陨落散场\n[01:40.79]对你的邀请  我没办法抵抗\n[01:44.50]明知道我会坠落在前方\n[01:48.15]我爱你 就像这柳絮 爱过远方\n[01:51.90]最后我 落地再生根 野蛮生长\n[01:55.53]你给的梦想 我从没有遗忘\n[01:59.28]所以我努力地长出翅膀\n[02:08.00]……\n[02:16.52]你 说会带我一起 去翻山破浪\n[02:23.65]而我 为这刹那感动 就心神激荡\n[02:30.39]明知时间是个变量 我们终会中途散场\n[02:37.77]我还是放下一切 为你去疯狂\n[02:45.53]我爱你  就像那流星 追逐月亮\n[02:49.16]明知道  唯一方向是 陨落散场\n[02:52.79]对你的邀请  我没办法抵抗\n[02:56.54]明知道我会坠落在前方\n[03:00.17]我爱你 就像这柳絮 爱过远方\n[03:03.88]最后我 落地再生根 野蛮生长\n[03:07.51]你给的梦想 我从没有遗忘\n[03:11.26]所以我努力地长出翅膀\n[03:42.29]我爱你  就像那流星 追逐月亮\n[03:46.37]明知道  唯一方向是 陨落散场\n[03:50.13]对你的邀请  我没办法抵抗\n[03:53.76]明知道我会坠落在前方\n[03:57.51]我爱你 就像这柳絮 爱过远方\n[04:01.14]最后我 落地再生根 野蛮生长\n[04:04.76]你给的梦想 我从没有遗忘\n[04:08.52]所以我努力地长出翅膀\n[04:14.02]你给的梦想 我从没有遗忘\n[04:17.99]所以我努力地长出翅膀\n[04:23.08]……\n[04:26.08]音乐总监:郑楠@SBMS Beijing\n[04:27.08]键盘:吴桐\n[04:28.08]吉他:劳国贤,牛子健\n[04:29.08]鼓:肖博文\n[04:30.08]贝斯:韩久强\n[04:31.08]和声编写:张恋歌\n[04:32.08]和声:张恋歌,鱼椒盐,张义欣,张嫚宸\n[04:33.08]PGM: 郭舒文@SBMS Beijing\n[04:34.08]人声编辑:汝文博@SBMS Beijing\n[04:35.08]混音:赵靖\n[04:36.08]音乐统筹:吕易秋@SBMS Beijing,朱思梦@SBMS Beijing\n[04:37.08]制作团队:SPEEDBUMPS MUSIC BEIJING\n[04:38.08]项目总监:宫尹琳Rainie\n[04:39.08]出品:抖音自制 热客Hot Cake Studio\n[04:40.00]发行:银河方舟 StarNeation',
      '[00:00.00]纯音乐，请欣赏',
    ];
    this.musicList = this.musicID.map((item, index) => {
      return {
        title: item[0],
        singer: item[1],
        cover: `./imgs/${item[0]}cover.jpg`,
        src: `./resource/${item[1]}-${item[0]}.flac`,
        lyrics: this.lyricsTemp[index].split('\n').map((item) => {
          return {
            time: +item
              .split('[')[1]
              .split(']')[0]
              .split(':')
              .reduce((res, item, i) => {
                return res + (i === 0 ? +item * 60 : +item);
              }, 0),
            text: item.split('[')[1].split(']')[1],
          };
        }),
      };
    });
    this.currMusic = 0;
    this.lrcSentenceHeight = 30;
    this.scale = this.lrcSentenceHeight * 1.2;
    this.newBindFn();
    this.init();
    this.bindEventFn();
  }

  initTemp() {
    const doms = this.elements;
    doms.audio.removeEventListener('timeupdate', this.playedTimeChange);
    doms.audio.src = this.musicList[this.currMusic].src;
    doms.audio.onloadeddata = () => {
      doms.audio.currentTime = 0;
      doms.progress.value = 0;
      const totalTime = +doms.audio.duration.toFixed(0);
      doms.timeView.innerHTML = this.formatTime(totalTime);
      doms.audio.onloadeddata = null;
      doms.audio.addEventListener('timeupdate', this.playedTimeChange);
    };
    doms.musicCover.src = this.musicList[this.currMusic].cover;
    doms.musicTitle.innerHTML = this.musicList[this.currMusic].title;
    doms.musicSinger.innerHTML = this.musicList[this.currMusic].singer;
    doms.volumeRange.value = doms.audio.volume * 100;
    doms.audio.playbackRate = +(+doms.rateValue.innerHTML).toFixed(1);
    this.lyricAdd();
  }

  formatTimeTemp(time) {
    let mins = Math.floor(time / 60);
    let secs = Math.floor(time % 60);
    mins = mins >= 10 ? mins : `0${mins}`;
    secs = secs >= 10 ? secs : `0${secs}`;
    return `${mins}:${secs}`;
  }

  playMusicTemp() {
    const doms = this.elements;
    doms.audio.play();
    doms.playBtn.classList.add('invisible');
    doms.pauseBtn.classList.remove('invisible');
    doms.player.style.aspectRatio = '1';
    doms.lyric.style.marginBottom = '20px';
  }

  pauseMusicTemp() {
    const doms = this.elements;
    doms.audio.pause();
    doms.pauseBtn.classList.add('invisible');
    doms.playBtn.classList.remove('invisible');
    doms.player.style.aspectRatio = '11/7';
    doms.lyric.style.marginBottom = '0';
  }

  skipBackTemp() {
    this.elements.audio.pause();
    if (this.currMusic === 0) {
      this.currMusic = this.musicList.length - 1;
    } else {
      this.currMusic--;
    }
    this.init();
    this.playMusic();
  }

  skipForwardTemp() {
    this.elements.audio.pause();
    if (this.currMusic >= this.musicList.length - 1) {
      this.currMusic = 0;
    } else {
      this.currMusic++;
    }
    this.init();
    this.playMusic();
  }

  audioMuteTemp() {
    const doms = this.elements;
    doms.audio.muted = !doms.audio.muted;
    doms.volumeMuteBtn.classList.toggle('invisible');
    doms.volumeLoudBtn.classList.toggle('invisible');
  }

  volumeChangeTemp() {
    const doms = this.elements;
    doms.audio.volume = +doms.volumeRange.value / 100;
  }

  rateChangeTemp() {
    const doms = this.elements;
    let temp = +doms.rateValue.innerHTML;
    if (temp >= 2) {
      temp = 0.5;
    } else {
      temp += 0.5;
    }
    doms.audio.playbackRate = temp;
    temp = temp.toFixed(1);
    doms.rateValue.innerHTML = `${temp}`;
  }

  playedTimeChangeTemp() {
    const doms = this.elements;
    const totalTime = doms.audio.duration;
    const playedtime = doms.audio.currentTime;
    doms.timeView.innerHTML = this.formatTime(totalTime - playedtime);
    doms.progress.value = (playedtime / totalTime) * 100;
  }

  progressClickTemp() {
    this.elements.audio.removeEventListener('timeupdate', this.playedTimeChange);
    this.elements.progress.addEventListener('mouseup', this.progressChange);
  }

  progressChangeTemp() {
    const doms = this.elements;
    doms.progress.removeEventListener('mouseup', this.progressChange);
    doms.audio.currentTime = (doms.progress.value / 100) * doms.audio.duration;
    doms.audio.addEventListener('timeupdate', this.playedTimeChange);
  }

  lyricAddTemp() {
    const box = this.elements.lyricBox;
    box.style.transform = '';
    box.innerHTML = this.musicList[this.currMusic].lyrics.reduce((res, item) => {
      return (res += `<li>${item['text']}</li>`);
    }, '');
  }

  lyricScrollTemp() {
    const doms = this.elements;
    const lis = doms.lyricBox;
    const lisHeight = lis.getBoundingClientRect().height;
    const time = doms.audio.currentTime;
    const lyric = this.musicList[this.currMusic].lyrics;
    const lrcHalfHeight = Math.floor(doms.lyric.getBoundingClientRect().height / 2);

    let currSentence = lyric.findIndex((item) => item.time >= time);
    currSentence = currSentence === -1 ? lyric.length : currSentence;
    currSentence = currSentence - 1 <= 0 ? 0 : currSentence - 1;

    let dis = currSentence * -this.lrcSentenceHeight + lrcHalfHeight - this.scale / 2;
    dis = dis >= 0 ? 0 : dis;
    dis = lisHeight + dis <= lrcHalfHeight * 2 ? lrcHalfHeight * 2 - lisHeight : dis;
    dis = currSentence === 0 ? 0 : dis;
    dis = lis.children.length === 1 ? lrcHalfHeight - 30 * 0.5 : dis;
    const active = lis.querySelector('.lyric-active');
    active && active.classList.remove('lyric-active');
    lis.children[currSentence].classList.add('lyric-active');
    lis.style.transform = `translateY(${dis}px)`;
  }

  keyHandlerTemp(e) {
    if (e.key === ' ') {
      this.elements.audio.paused ? this.playMusic() : this.pauseMusic();
    }
    if (e.key === 'Control') {
      window.addEventListener('keyup', this.shortCutKey);
    }
    if (e.key === 'ArrowLeft') {
      const temp = +this.elements.progress.value;
      this.elements.progress.value = temp - (5 / this.elements.audio.duration) * 100;
      this.progressChange();
    }
    if (e.key === 'ArrowRight') {
      const temp = +this.elements.progress.value;
      this.elements.progress.value = temp + (5 / this.elements.audio.duration) * 100;
      this.progressChange();
    }
  }

  shortCutKeyTemp(e) {
    if (e.key === 'ArrowLeft') {
      this.skipBack();
    }
    if (e.key === 'ArrowRight') {
      this.skipForward();
    }
    if (e.key === 'm') {
      this.audioMute();
    }
    if (e.key === 'z') {
      this.rateChange();
    }
    if (e.key === 'Control') {
      window.removeEventListener('keyup', this.shortCutKey);
    }
  }

  newBindFn() {
    this.init = this.initTemp.bind(this);
    this.formatTime = this.formatTimeTemp.bind(this);
    this.playMusic = this.playMusicTemp.bind(this);
    this.pauseMusic = this.pauseMusicTemp.bind(this);
    this.skipBack = this.skipBackTemp.bind(this);
    this.skipForward = this.skipForwardTemp.bind(this);
    this.audioMute = this.audioMuteTemp.bind(this);
    this.volumeChange = this.volumeChangeTemp.bind(this);
    this.rateChange = this.rateChangeTemp.bind(this);
    this.playedTimeChange = this.playedTimeChangeTemp.bind(this);
    this.progressClick = this.progressClickTemp.bind(this);
    this.progressChange = this.progressChangeTemp.bind(this);
    this.lyricAdd = this.lyricAddTemp.bind(this);
    this.lyricScroll = this.lyricScrollTemp.bind(this);
    this.keyHandler = this.keyHandlerTemp.bind(this);
    this.shortCutKey = this.shortCutKeyTemp.bind(this);
  }

  bindEventFn() {
    const doms = this.elements;
    doms.playBtn.addEventListener('click', this.playMusic);
    doms.pauseBtn.addEventListener('click', this.pauseMusic);
    doms.skipBackBtn.addEventListener('click', this.skipBack);
    doms.skipForwardBtn.addEventListener('click', this.skipForward);
    doms.volumeMuteBtn.addEventListener('click', this.audioMute);
    doms.volumeLoudBtn.addEventListener('click', this.audioMute);
    doms.volumeRange.addEventListener('input', this.volumeChange);
    doms.playRateBtn.addEventListener('click', this.rateChange);
    doms.audio.addEventListener('timeupdate', this.playedTimeChange);
    doms.audio.addEventListener('timeupdate', this.lyricScroll);
    doms.progress.addEventListener('mousedown', this.progressClick);
    doms.audio.addEventListener('ended', this.skipForward);
    window.addEventListener('keydown', this.keyHandler);
  }
})();
function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}
