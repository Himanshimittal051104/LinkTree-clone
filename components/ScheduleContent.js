import React from 'react'
import Image from 'next/image'
const ScheduleContent = () => {
  return (
    <div className='flex gap-2 justify-center items-center w-full h-full'>
      <div className='w-28 h-28 rounded-2xl bg-customCyan text-white relative flex items-center justify-center text-2xl font-semibold'>
        <span>00</span>
        {/* <span>01</span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
        <span>05</span>
        <span>06</span>
        <span>07</span>
        <span>08</span>
        <span>09</span>
        <span>10</span>
        <span>11</span>
        <span>12</span>
        <span>13</span>
        <span>14</span>
        <span>15</span>
        <span>16</span>
        <span>17</span>
        <span>18</span>
        <span>19</span>
        <span>20</span>
        <span>21</span>
        <span>22</span>
        <span>23</span>
        <span>24</span>
        <span>25</span>
        <span>26</span>
        <span>27</span>
        <span>28</span>
        <span>29</span> */}
      </div>
      <div className='w-28 h-28 rounded-full bg-FallingTears relative flex items-center justify-center text-2xl font-semibold text-customDark'>
        <span>Jan</span>
        {/* <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
        <span>Aug</span>
        <span>Sep</span>
        <span>Oct</span>
        <span>Nov</span>
        <span>Dec</span> */}
      </div>
      <div className='w-28 h-28 rounded-2xl bg-customSapphire text-white relative flex items-center justify-center text-2xl font-semibold'>
      <span>12am</span>
      {/* <span>1am</span>
      <span>2am</span>
      <span>3am</span>
      <span>4am</span>
      <span>5am</span>
      <span>6am</span>
      <span>7am</span>
      <span>8am</span>
      <span>9am</span>
      <span>10am</span>
      <span>11am</span>
      <span>12pm</span>
      <span>1pm</span>
      <span>2pm</span>
      <span>3pm</span>
      <span>4pm</span>
      <span>5pm</span>
      <span>6pm</span>
      <span>7pm</span>
      <span>8pm</span>
      <span>9pm</span>
      <span>10pm</span>
      <span>11pm</span> */}
      </div>
    </div>
  )
}

export default ScheduleContent
